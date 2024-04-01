import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Loader = () => {
  return (
    <ThreeDots
    color="#FFA500"
    ariaLabel="three-dots-loading"
    visible={true}
    wrapperStyle={{margin:'auto'}}
    height={24}
  />
  )
}

export default Loader