require("dotenv").config();

import { GraphQLServer } from "graphql-yoga";

// 5. PORT같은 서버 설정은 env 파일에 추가하고 불러오기
const PORT = process.env.PORT || 4000;

// 2. type 정의와 resolver 필요
const typeDefs = `
    type Query {
        hello : String!
    }
`;

// 3. resolvers의 쿼리로 hello를 추가, Hi를 응답값으로 설정 
const resolvers = {
    Query : {
        hello : () => "Hi"
    }
};

// 1. 서버 만들기
const server = new GraphQLServer({typeDefs, resolvers});

// 4. server.start 함수 추가. 옵션 필요
// 6. callback 함수 추가. Server running on port ${PORT} 라는 값을 리턴할 것임
server.start({port: PORT}, () => console.log(`Server running on port http://localhost:${PORT}`));