import { prisma } from "../../../generated/prisma-client";

export default {
    User : {
        posts : ({ id }) => prisma.user({ id }).posts(),
        following : ({ id }) => prisma.user({ id }).following(),
        followers : ({ id }) => prisma.user({ id }).followers(),
        likes : ({ id }) => prisma.user({ id }).likes(),
        comments : ({ id }) => prisma.user({ id }).comments(),
        rooms : ({ id }) => prisma.user({ id }).rooms(),
        followingCount : ({ id }) => {
            return prisma.usersConnection({
                where : {
                    followers_some : { id }
                }
            }).aggregate().count();
        },
        followersCount : ({ id }) => {
            return prisma.usersConnection({
                where : {
                    following_none : { id }
                }
            }).aggregate().count();
        },
        fullName : ( parent ) => {
            return `${parent.firstName} ${parent.lastName}`
        },
        isFollowing : (parent, _, {request}) => {
            const { user } = request;
            const { id : parentId } = parent;

            try {
                return prisma.$exists.user({
                    AND : [
                        { id : user.id },
                        { following_some : { id : parentId } }
                    ]
                });
            } catch (error) {
                console.log(error);
                return false;
            }
        },
        isSelf : (parent, _, {request}) => {
            const { user } = request;
            const { id : parentId } = parent;
            
            return user.id === parentId
        }
    }
}