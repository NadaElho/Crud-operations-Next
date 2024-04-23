import { getSession, signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'

const index = () => {
  const [products, setProducts] = useState([])
  const [prd, setPrd] = useState('')
  const [edit, setEdit] = useState(null)

  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    (async()=>{
      const session = await getSession()
      if(!session){
        signIn()
      }
      else{
        setLoading(false)
      }
    })()
  },[])

  const fetchProducts = async () => {
    const res = await fetch('/api/products')
    const data = await res.json()
    setProducts(data.message)
  }

  const changeHandler = (e) => {
    setPrd(e.target.value)
    console.log(e.target.value)
  }

  const addHandler = async (prdId) => {
    if (prdId) {
      const res = await fetch(`/api/products/${prdId}`, {
        method: 'PATCH',
        body: JSON.stringify(prd),
      })
      console.log(prdId)
      setEdit(null)
    } else {
      const res = await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify({ prd }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
    setPrd('')
    fetchProducts()
  }

  const deleteHandler = async (prdId) => {
    const res = await fetch(`/api/products/${prdId}`, {
      method: 'DELETE',
    })
    console.log(prdId)
    fetchProducts()
  }

  const editHandler = async (prdId, prdName) => {
    setEdit(prdId)
    setPrd(prdName)
  }
  if(loading) return <div>Loading ...</div>
  return (
    <div>
      <h1 className="m-2">Products</h1>
      <button onClick={fetchProducts} className="bg-blue-500 p-2">
        Get products
      </button>
      {products &&
        products.map((prd) => (
          <div key={prd.id}>
            <div className="m-2">id: {prd.id}</div>
            <div className="m-2">name: {prd.name}</div>
            <button
              className="bg-blue-500 p-2"
              onClick={() => editHandler(prd.id, prd.name)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 p-2"
              onClick={() => deleteHandler(prd.id)}
            >
              Delete
            </button>
          </div>
        ))}
      <br />
      <input
        type="text"
        className="text-gray-900 my-2"
        value={prd}
        onChange={changeHandler}
      />
      <button onClick={() => addHandler(edit)} className="bg-blue-500 p-1 mx-2">
        {edit != null ? 'Edit product' : 'Add product'}
      </button>
    </div>
  )
}

export default index

