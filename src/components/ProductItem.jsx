import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export const ProductItem = () => {
    const {id} = useParams();
    console.log(id, "locHari")


  return (
    <div>ProductItem</div>
  )
}

