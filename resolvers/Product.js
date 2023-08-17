exports.Product= {
    category:(parent,args,{categories}) => {
        const categoryId = parent.categoryId
        return categories.find(category => category.id === categoryId)
    },
    reviews:({id},{filter},{reviews})=>{
        
        let productReviews = reviews.filter(review=>review.productId === id)
        let filteredProductReviews = productReviews

        if(filter && filter.rating >= 3){
            filteredProductReviews = filteredProductReviews.filter(review => review.rating >= 3)
        }
        return filteredProductReviews
    }
 }