import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/CardsContainer.css'
import getConfig from '../utils'
import CardProduct from './CardProduct'
const CardsContainer = ({ products }) => {

  const [cartProducts, setCartProducts] = useState()
  const [dataProduct, setDataProduct] = useState()


  useEffect(() => {
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(url, getConfig())
      .then(res => setCartProducts(res.data.data.cart.products))
      // .catch(err => console.log(err))
  }, [])

  // useEffect(() => {
  //   const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
  //   axios.post(url, dataProduct, getConfig())
  //     .then(res => setCartProducts(res.data.data.cart.products))
  //     .catch(err => console.log(err))

  //   console.log(dataProduct)
  // }, [dataProduct])

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
    <div className='cards__container'>
      {products && products.map(product => <CardProduct handleAddProduct={handleAddProduct} key={product.id} product={product} />)}
    </div>
  )
}

export default CardsContainer