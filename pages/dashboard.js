import { getSession, signIn } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

export default function dashboard() {
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
  if(loading) return <div>Loading...</div>
    return (
      <div>
        Dashboard
      </div>
    )
}
