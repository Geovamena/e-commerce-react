import axios from 'axios'
import React, { useState } from 'react'
import '../styles/ProductDetails.css'
import getConfig from '../utils'
import CardProduct from './CardProduct'

const SimilarsProducts = ({products}) => {


    const handleAddProduct = id => {
        const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        let data = {
          id: id,
          quantity: 1
        }
    
        axios.post(url, data, getConfig())
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
      }

  return (
    <div className='similars__products__container'>
      {products && products.map(product => <CardProduct key={product.id} product={product} handleAddProduct={handleAddProduct}/> )  }
    </div>
  )
}

export default SimilarsProducts