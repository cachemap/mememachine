const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema.js')

console.log(typeDefs);

const server = new ApolloServer({typeDefs})

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}!`)
})