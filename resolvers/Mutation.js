const {v4:uuid} = require('uuid')

exports.Mutation = {
    addCategory:(parent,{input},{categories})=>{
        const {name} = input
        
        const newCategory ={
            id: uuid(),
            name
        }

        categories.push(newCategory)

        return newCategory
    },
    addProduct:(parent,{input},{products})=>{
        const {name,description,quantity,price,image,onSale,categoryId} = input
        const newProduct ={
            id: uuid(),
            name,
            description,
            quantity,
            price,
            image,
            onSale,
            categoryId
        }

        products.push(newProduct)

        return newProduct
    }
}