const {ApolloServer} = require('apollo-server')
const {products, categories,reviews} = require('./db')
const {Product} = require('./resolvers/Product')
const {Category} = require('./resolvers/Category')
const {Query} = require('./resolvers/Query')
const {Mutation} = require('./resolvers/Mutation')
const {typeDefs} = require('./schema')




const server = new ApolloServer({
    typeDefs,resolvers:{
        Query,Product,Category,Mutation
    },
    context: {
        products,categories,reviews
    }
})

server.listen().then(({url})=>{
    console.log(`Server is listening at ${url}`)
})