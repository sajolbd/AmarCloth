import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from './Breadcrum'
import ProductDisplay from './ProductDisplay'
import DescriptionBox from './DescriptionBox'

const SingleProduct = () => {
    const {all_product} = useContext(ShopContext)
    const {productId} = useParams()
    const product = all_product?.find((e) => e.id === Number(productId))
    console.log(product)
  return (
    <div className='max-w-7xl mx-auto mb-32 mt-32'> 
      <Breadcrum product={product}></Breadcrum>
      <ProductDisplay product={product}></ProductDisplay>
      <DescriptionBox></DescriptionBox>
    </div>
  )
}

export default SingleProduct
