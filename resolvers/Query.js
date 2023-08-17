exports. Query= {
    Hello: () => 'Hello World',
    products: (parent,{filter},{products}) =>{
      let filteredProducts = products
     if(filter && filter.onSale === true){
         filteredProducts = filteredProducts.filter(product => product.onSale)
     }
     if(filter && filter.onSale === false){
         filteredProducts = filteredProducts.filter(product => product.onSale === false)
     }
     
     return filteredProducts
    },
    categories:(parent,args,{categories})=> categories,
    reviews: (parent, { filter }, { reviews }) => {
        let filteredReviews = reviews;
        if (filter && filter.rating >= 3) {
          filteredReviews = filteredReviews.filter(review => review.rating >= 3);
        }
        if (filter && filter.rating === 5) {
          filteredReviews = filteredReviews.filter(review => review.rating === 5);
        }
        return filteredReviews;
      },
    category: (parent,{id},{categories}) => {
        
        return categories.find(category => category.id === id)
    },
    product: (parent,{id},{products}) => {
        return products.find(product => id === product.id)
    },
    review:(parent,args,context)=>{
        return reviews.filter(review => review.id === args.id)
    }
}