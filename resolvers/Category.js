exports.Category={
    products:({id},{filter},{products})=>{
        
        let categoryProducts = products.filter(product => product.categoryId === id)
        let filteredCategoryProducts = categoryProducts
        
        if(filter && filter.onSale === true){
            filteredCategoryProducts = filteredCategoryProducts.filter(product => product.onSale)
        }
        if(filter && filter.onSale === false){
            filteredCategoryProducts = filteredCategoryProducts.filter(product => product.onSale === false)
        }
        return filteredCategoryProducts
    }
 }