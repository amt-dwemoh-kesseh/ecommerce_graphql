const {gql} = require('apollo-server');

exports.typeDefs = gql`
    type Query{
        Hello:String
        products(filter:ProductsFilter):[Product!]!
        categories:[Category!]!
        product(id:ID!):Product
        category(id:ID!):Category
        reviews(filter:ReviewRatingFilter):[Review!]!
        review(id:ID!):Review
    }
    type Mutation{
        addCategory(input:CategoryInput!):Category!
        addProduct(input:ProductInput!):Product!
        addReview(input:ReviewInput!):Review!
    }
    type Product{
        id:ID!
        name:String!
        description:String!
        quantity:Int!
        price:Float!
        image:String!
        onSale:Boolean!
        category:Category
        reviews(filter:ReviewRatingFilter):[Review!]!
    }
    type Category{
        id:ID!
        name:String!
        products(filter:ProductsFilter):[Product!]!
    }
    type Review{
        id:ID!
        date:String!
        title:String!
        comment:String!
        rating:Int!
        productId:ID!
    }
    input ProductsFilter{
        onSale:Boolean
    }
    input ReviewRatingFilter{
        rating:Int
    }
    input CategoryInput{
        name:String
    }
    input ProductInput{
        name:String
        description:String
        quantity:Int
        price:Float
        image:String
        onSale:Boolean
        categoryId:ID
    }
    input ReviewInput{
        name:String
        date:String
        title:String
        comment:String
        rating:Int
        productId:String
    }
`