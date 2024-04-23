import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const product = () => {
    // const {query} = useRouter()
    // const [data, setData] = useState({})
    // useEffect(()=>{
    //   async function fetchData(){
    //     let res = await fetch(`http://localhost:8000/products/${query.product_id}`)
    //     let data = await res.json()
    //     setData(data)
    //     console.log(data);
    //   }
    //   fetchData()
    //})
  return (
    <div>
          {/* <h2>Product with ID <span className="text-blue-600">{query.product_id}</span></h2>
          <div>Product name: {data.title}</div>
          <div>Product price: {data.price}</div>
          <div>Product description: {data.description}</div> */}
    </div>
  )
}

export default product