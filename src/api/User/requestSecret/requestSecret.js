import { prisma } from "../../../../generated/prisma-client";
import { generateSecret, sendSecretMail } from "../../../utils";

export default {
    Mutation : {
        requestSecret : async( _, args ) => {
            const { email } = args;
            const loginSecret = generateSecret();
            console.log(loginSecret);
            
            try {
                throw Error();
                await sendSecretMail(email, loginSecret)

                await prisma.updateUser({
                    data : { loginSecret : loginSecret }, where : { email }
                })
                console.log('tried requrestSecret')
                return true;
            } catch (error) {
                console.log(error)
                return false;
            }
        }
    }
}