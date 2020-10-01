// 10.
import path from "path";
// 9.
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";

// 11. **는 모든 폴더, *.graphql은 모든 .graphql 파일
const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql"));

// 12. api 폴더 밑에는 resolver가 아닌 종류의 js 파일을 두면 안됨
// 만약 다른 종류의 js 파일을 둔다면 문제가 생김
const allResolvers = fileLoader(path.join(__dirname, "/api/**/*.js"));

// 13. 함수의 인자로 typeDefs와 resolvers를 입력해주면 됨
const schema = makeExecutableSchema({
    typeDefs : mergeTypes(allTypes),
    resolvers : mergeResolvers(allResolvers)
});

export default schema;