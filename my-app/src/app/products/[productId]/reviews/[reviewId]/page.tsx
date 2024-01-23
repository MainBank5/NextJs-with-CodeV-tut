type reviewprops = {
    params: {
        reviewId:string;
        productId:string;
    }
}



const Review = ({params} :reviewprops) => {
  return (
    <div>
        <h1>Review {params.reviewId} for product {params.productId} </h1>
    </div>
  )
};

export default Review;