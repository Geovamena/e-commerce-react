import axios from 'axios'
import React from 'react'
import getConfig from '../../utils'

const CartProduct = ({product}) => {

 
  const deleteProduct = id => {
    const url = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`
    axios.delete(url, getConfig())
    .then(() => getAllProducts())
    .catch(err => console.log(err))
  }

  // console.log(product)
  return (
    <div className='cart__product'>
        <h5>{product.title}</h5>
            <button onClick={() => deleteProduct(product.id)}>DELETE</button>
    </div>
  )
}

export default CartProduct