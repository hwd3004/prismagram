# 1.2 Setting Up the Server like the Pros

1. npm install morgan
   
   https://www.npmjs.com/package/morgan

   로깅 전용 모듈 미들웨어

2. GraphQLServer에는 express 서버가 내장되어있다
   
   server.express 라고 하면 express 서버에 접근할 수 있다

3. server.js에서 const typeDefs와 const resolvers를 추가하지 않고,
   더 프로페셔녈한 방식으로 추가하는 방법

   src 폴더에서 api 폴더를 하나 새로 만들고, schema.js 파일 하나 만듬

   모든 파일들을 이 파일에서 합칠거임

   api 폴더 안에 아주 많은 graphql 파일 들이 추가될거고,

   같은 위치에 resolvers 파일들이 추가될거임

   그 파일들을 이 schema.js 파일로 밀어넣을거임

   그 다음에 서버는 schema.js 파일 하나만 입력해주면 됨

4. 프로젝트를 작업하는 방식으로,
   
   폴더를 만들고, 폴더 밑에 graphql 파일들과 resolver 파일들을 만듬

   그리고 그것들을 모아서 import함

5. npm install graphql-tools
   
   npm install merge-graphql-schemas

6. 댓글 참고
   버전 업데이트가 되어 달라진 코드가 있는 듯하지만,
   나는 그냥 영상대로 하였다

---

# 1.1 Creating GraphQL Server

1. npm install dotenv

2. 1~6번 주석에 해당하는 코드들 입력 후 서버 재시작하는데 오류 발생
   
   (node:17532) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

   import { GraphQLServer } from "graphql-yoga";

   ^^^^^^

   원인은 node가 import를 인식못함
   
   해결책은 .babelrc 파일을 새로 추가하고,
   npm install @babel/preset-env
   
   굳 잘된다

3. 정리
   
   graphql-yoga를 이용해서 graphql 서버를 만들었다


---

# 1.0 Setting up the project

1. npm init

2. npm install graphql-yoga

3. pack.json에서
   
   "main": "index.js", 는 필요없다

4. npm install nodemon -D
   
   src/server.js에 있는 코드를 실행하는 script를 작성하는데 필요

5. npm install --save-dev @babel/core @babel/node
   
   https://babeljs.io/docs/en/next/babel-node.html

6. package.json에서
   
   "scripts": {
        "dev": "nodemon --exec babel-node src/server.js"
    },

7. nodemon.json 파일 추가
   
   ext라는 걸로 nodemon이 감시해야 할 파일의 확장자들을 지정할 수 있음
   {
        "ext" : "js graphql"
    }

8. npm run dev
   
   서버 온

9.  정리
    
    babel은 멋진 코드를 못생긴 코드로 바꿔주는 도구
    nodemon을 실행할 때마다 babel-node로 src 폴더의 server.js 파일을 실행
    nodemon은 파일을 저장할때마다 실행을 새로 해주는 도구, 서버를 껐다 켰다 할 필요 없음

---

# prismagram
 Instagram clone with express, prisma, react, react native