import React from 'react'

const Reviews = ({reviews}) => {
  return (
    <div>
      <div className='m-2'>Reviews</div>
      {/* {reviews.map((rev)=><div className='m-2'>{rev.content}</div>)} */}
    </div>


  )
}

export default Reviews
// export async function getServerSideProps(){
//   const res = await fetch("http://localhost:8000/reviews")
//   const data = await res.json();
//   return {
//     props: {reviews: data}
//   }
// }