const {GraphQLServer} = require('graphql-yoga')

// graphQL need types/schemas
//! = field required
const messages = [];

const typeDefs = `
    type Message {
        id: ID!
        user: String!
        content: String!

    }

    type Query {
        messages: [Message!]
    }

    type Mutation {
        postMessage(user: String!, content:String!): ID!
    }
`

const resolvers = {
    Query: {
        messages: () => messages
    },

    Mutation: {
        
    }
}

const server = new GraphQLServer({ typeDefs, resolvers })

server.start(({ port }) => {
    console.log(`Server ${port}`)
})