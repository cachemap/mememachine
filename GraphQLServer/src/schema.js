const { gql } = require('apollo-server')

const typeDefs = gql`
type Query {
    memes: [Meme]
}

type Meme {
    text: String
}
`

module.exports = typeDefs