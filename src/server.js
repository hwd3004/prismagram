import dotenv from "dotenv";
import path from "path";

dotenv.config({path: path.resolve(__dirname, ".env")})

import { GraphQLServer } from "graphql-yoga";

// 14.
import schema from "./schema.js";

// 7.
import logger from "morgan";

import { sendSecretMail } from "./utils";

// 5. PORT같은 서버 설정은 env 파일에 추가하고 불러오기
const PORT = process.env.PORT || 4000;

// 2. type 정의와 resolver 필요
// const typeDefs = `
//     type Query {
//         hello : String!
//     }
// `;


// 이거  왜 안돼
sendSecretMail("hwd3004@gmail.com", "123")



// 3. resolvers의 쿼리로 hello를 추가, Hi를 응답값으로 설정 
// const resolvers = {
//     Query : {
//         hello : () => "Hi"
//     }
// };

// 1. 서버 만들기
// const server = new GraphQLServer({typeDefs, resolvers});

// 15.
const server = new GraphQLServer({ schema });

// 8. express 서버에서 logger 미들웨어를 사용하도록 할 것임. 사실은 morgan 모듈임
server.express.use(logger("dev"))

// 4. server.start 함수 추가. 옵션 필요
// 6. callback 함수 추가. Server running on port ${PORT} 라는 값을 리턴할 것임
server.start({port: PORT}, () => console.log(`Server running on port http://localhost:${PORT}`));