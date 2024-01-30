import { notFound } from "next/navigation";

type reviewprops = {
    params: {
        reviewId:string;
        productId:string;
    }
}

function getRandomInt (count: number) {
     return Math.floor(Math.random() * count)
}



const Review = ({params} :reviewprops) => {
  getRandomInt(2)
  if (parseInt(params.reviewId) > 1000) {
    notFound()
  }
  return (
    <div>
        <h1>Review {params.reviewId} for product {params.productId} </h1>
    </div>
  )
};

export default Review;