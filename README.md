# 3.5 Passport JWT part One

1. utils.js에서 sendSecretMail은 sendMail을 리턴하고,

sendMail은 Promise 함수를 리턴함.

2. http://www.passportjs.org/packages/passport-jwt/

npm install passport passport-jwt

passport는 인증 관련한 모든 일을 한다

jwt 토큰이나 쿠키에서 정보를 가져와서 사용자 정보에 저장한다

토큰에서 정보를 가져와서 express의 request에 붙여준다

토큰을 가져와서 해독한 후에 사용자 객체를 request에 추가한다

3. const jwtOption 에서

jwtFromRequest : JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken()

Authorization 헤더에서 jwt를 찾는 역할을 한다

---

# 3.4 sendMail Function with Nodemailer

1. process.env.PORT가 undefind였다

못찾으면 4000을 쓰도록 설정해뒀기때문에 작동하고 있었다

dotenv는 같은 폴더에 있는 .env 파일을 찾는다

2. nodemailer, sendgrid, sendgrid nodemailer

npm install nodemailer

npm install nodemailer-sendgrid-transport

3. export const sendMail = (email) => {

}

인자값 email은 이메일 주소만 말하는게 아니라, 필요한 모든 것이 담긴 것

---

# 3.3 requestSecret Resolver

사용자 생성이 끝났고, 이제 로그인 차례

정확히는 로그인이 아니라, 비밀값 요청,

비밀값 확인 과정 이후 로그인

비밀값 요청 기능은 requestSecret 폴더와 파일들로 만든다






requestSecret.js 작업 중 에러


Error: Variable '$data' expected value of type 'UserUpdateInput!' but got: {"loginSecret":"watch island"}. Reason: 'loginSecret' Field 'loginSecret' is not defined in the input type 'UserUpdateInput'. (line 1, column 11):
mutation ($data: UserUpdateInput!, $where: UserWhereUniqueInput!)


강의에서 client 코드를 generate 하지 않은게 원인이라고 한다


터미널에 prisma1 generate, prisma1 deploy


여전히 에러가 뜨는데, loginSecret은 필수가 아니어야한다고 한다


datamodel.prisma와 modes.graphql에 loginSecret : String! 을 String으로 바꿔주면 되는데,

난 loginSecret을 만들어놓지않았다;;;



loginSecret : String! @default(value : "")

이렇게 하면 필수로 설정하고, default를 지정할 수 있다

기존 자료들은 이 기본값을 받게 된다, 하지만 강의에선 필수로 하지 않고 한다




vscode에서 드래그나로 범위로 지정한 텍스트에서 alt + shit + i 하면, 각 라인 맨 마지막줄에 편집상태가 된다

각 라인 맨 처음은, 아톰 에디터의 매우 편리한 ctrl + f 기능으로 해결하였다


랜덤 글자 생성 사이트

https://www.randomlists.com/random-words

---

# 3.2 Create Account Resolver

Mutation과 Query의 차이


createAccount.js 에서


export default {

    Mutation : {

        createAccount : async ( _, args ) => {
           some code...
        }

    }

}


첫번째 인자 root는 필요 없다





localhost:4000에서 테스트


mutation {

  createAccount(username:"hwd1009", email:"hwangwondong@naver.com", firstName:"hwang", lastName:"wondong"){

    id

  }

}


왜인지는 모르겠는데 username : 값입력 이후에 한줄 띄우고, email : 값입력 이후에 한줄 띄우는 식으로 하니까 실행이 안된다




---

# 3.1 Planning the API

앞으로 해야할 것들

로그인
Log in

사진을 보면 사진에 좋아요루를 누를 수 있고, 좋아요를 취소할 수도 있어야함
Like / Unlike a photo

사진에 댓글 남길수 있어야함
아쉽게도 댓글 삭제, 수정은 하지않음
Comment on a photo

사용자 검색
Search by user

위치로 검색
Search by location

사용자 프로필 보기
See user profile

팔로우, 언팔로우
Follow / Unfollow user

사진 크게 보기. 모달로 만들지는 않고, 새로운 페이지에 열게 만듬

사진 페이지에서 사용자를 클릭해서, 사용자의 프로필 페이지로 이동

사용자가 프로필 정보를 편집
Edit my profile

계정 생성
Create account

사진 업로드
Upload photos

사진 편집, 삭제
Edit the photo and Delete

사용자가 처음에 인스타그램에 접속하면 feed를 볼 수 있어야함
Seed the feed



이것들을 resolver로 만들거고, prisma를 이용하여 빠르게 만들 수 있음
Seed the feed는 조금 어려우므로, 제일 마지막에 작업

로그인은, 페이지에 처음 접속하면 이메일을 입력하고,
서버에서 사용자의 이메일로 비밀값을 전송해줄것임, nodemailer를 사용할것임
사용자들이 전송받은 비밀값을 페이지에 붙여넣기하면 로그인하게 되고,
사용자들이 이메일에 접근할 수 있다는 것을 확인하게 됨
비밀값 유효기간을 지정할 수도 있음

로그인하면 토근을 부여하고, 사용자가 페이지 접속해서 이메일을 입력하면,
비밀값이 전송되고, 사용자들은 그 비밀값을 복붙해서 접속하는 것

보통 비밀먼호를 쓰지만, 다른 방식으로 해보는 것


---

# 2.4 Resolvers with Prisma

graphql은 prisma 문법을 이해못한다

---

# 2.3 Intergrating Prisma in our Server

1. 실제 api에서 어떻게 prisma를 사용할까

   prisma.yml 파일이 있다. 이건 깃헙에 올리면 안된다

   만약 prisma에 문제가 생긴다면, url과 모든 서비스를 변경해야한다

   prisma.yml에는 엔드포인트 주소가 있고,

   generated 폴더 안의 prisma-client 폴더에는 index, prisma-sechma 파일이 있다

   이 파일을 통해 prisma와 정보를 주고 받는다

2. 서비스를 배포할 때마다, prisma cloud에서 무언가를 생성하는데, 그걸 다운받아야한다
   
   prisma 서버와 정보를 주고 받으려면, prisma client를 다운받아야한다

   터미널에 prisma1 generate

   sayHello.js 코드 수정

   npm install prisma-client-lib

3. 사람들이 서버에 정보를 요청하면, 서버는 prisma에 요청한다

   이렇게 하는게 사람들이 서버에 직접 요청하는 것보다 안전하다

   프론트 엔드가 서버에 요청하면, 서버가 prisma에 요청

---

# 2.2 Testing Prisma OMG

1. upsert는 update 혹은 insert

2. prisma admin에서 유저 하나 생성해보기

mutation {
  createUser(data:{username:"liufeier", email:"hwd3004@gmail.com"}){id}
}

3. 검색

{
  user(where:{username:"liufeier"}){id, username, email}
}

4. 수정

mutation {
  updateUser(data:{firstName:"first", lastName:"last"} where:{username:"liufeier"}){username}
}

5. 팔로잉, 팔로워 포함 검색

{
  user(where:{username:"liufeier"}){
    id
    username
    email
    firstName
    lastName
    followers {username}
    following {username}
  }
}

6. create, connect, disconnect
   
   create는 사용자 생성, connect는 생성된 사용자가 있다면 연결

7. 팔로워 테스트

mutation {
  updateUser(data:{following:{
    connect:{
      username:"liufeier"
    }
  }}where:{username:"test"}){
    username
    firstName
    lastName
    following {
      username
    }
    followers {
      username
    }
  }
}

---

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