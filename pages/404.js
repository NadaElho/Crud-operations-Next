import { useRouter } from 'next/router'
import React from 'react'

const NotFound = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('home')
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h1 className="text-2xl">Page Not Found! 😢</h1>
      <button
        type="button"
        class="btn btn-primary bg-blue-900 p-2 m-2"
        onClick={handleClick}
      >
        Go to Home
      </button>
    </div>
  )
}

export default NotFound
NotFound.getLayout = (page) => {
  return <>{page}</>
}
