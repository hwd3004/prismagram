
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

9. 정리
    babel은 멋진 코드를 못생긴 코드로 바꿔주는 도구
    nodemon을 실행할 때마다 babel-node로 src 폴더의 server.js 파일을 실행
    nodemon은 파일을 저장할때마다 실행을 새로 해주는 도구, 서버를 껐다 켰다 할 필요 없음
---

# prismagram
 Instagram clone with express, prisma, react, react native