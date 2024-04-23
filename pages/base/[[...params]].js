import { useRouter } from 'next/router'
import React from 'react'

const Base = () => {
  const { query } = useRouter()
  const { params = [] } = query
  if (params.length == 1) {
    return (
      <h2>
        There is one param <span>{params[0]}</span>
      </h2>
    )
  } else if (params.length == 2) {
    return (
      <h2>
        There are 2 params{' '}
        <span>
          {params[0]} - {params[1]}
        </span>
      </h2>
    )
  }
  return <h3>There are {params.length} params</h3>
}

export default Base
