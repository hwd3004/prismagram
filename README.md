# 2.1 Datamodel with Prisma

1. prisma로 모델 만들기
   
   파일 하나로는 포스트를 만들지 않는다. 포스트 하나에는 많은 파일들이 속하게 되고,
   
   각각의 파일들은 url을 가지게 된다

   파일은 포스트와 연결되어 있다, 파일에 포스트를 추가해야한다
---

# 2.0 Introduction to Prisma

1. Prisma는 무엇?
   
   프리즈마는 ORM이다. 오브젝트 릴레이셔널 매핑

   프리즈마는 데이터베이스 관련한 어려운 문제들을 해결해준다

   typeorm, django orm, sequelize 같은 다른 orm도 있다

   프리즈마는 어플리케이션에 필요한 모델을 graphql로 정의할 수 있다는 점에서 특별하다

2. 프리즈마가 현재 업데이트 되어 프리즈마2가 되었지만,
   
   강의에서는 아직 프리즈마1이다

   https://app.prisma.io/login (Prisma 1 Cloud)

   여기서 계속 프리즈마1으로 할 수 있다

   https://v1.prisma.io/docs/1.34

   프리즈마1 다큐먼트 링크

3. https://app.prisma.io/login (Prisma 1 Cloud)
   
   이 주로 가서, npm install -g prisma1 이대로 설치하고,

   밑에 있는 로그인 복붙해서 하면 된다

4. prisma1 init hello-world 한 다음에,
   
   지금은 데모로 테스트를 해볼것이기 때문에,

   Demo server + MySQL database 선택

   그다음에 demo-use1 선택
   
   name은 prismagram

   stage는 dev

   클라이언트는 자바스크립트 클라이언트

5. hello-world 폴더와, 안에 파일이 생성되었다
   
   파일들을 prisma 폴더로 옮기고, hello-world 폴더는 지웠다
   
   extensions에서 prisma를 직접 설치하였다

   prisma1 deploy

---

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