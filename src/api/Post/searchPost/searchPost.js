import { prisma } from "../../../../generated/prisma-client"

// export default {
//     Query : {
//         searchPost : async ( _, args) =>
//             prisma.posts({
//                 where : {
//                     OR : [
//                         { location_contains : args.term },
//                         { caption_contains : args.term }
//                     ]
//                 }
//             })
//     }
// }

export default {
    Query : {
        searchPost : async ( _, args ) => {
            return prisma.posts({
                where : {
                    OR : [
                        { location_contains : args.term },
                        { caption_contains : args.term }
                    ]
                }
            })
        }
    }
}