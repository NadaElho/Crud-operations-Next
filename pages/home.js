import Image from 'next/image'
import React from 'react'

const home = () => {
  return (
    <div className='w-screen flex justify-center items-center'>
        <Image alt='' src="/Welcome-bro.png" className='mt-[100px]' width={400} height={400} />
    </div>
  )
}

export default home