import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Cart.css'
import getConfig from '../utils'
import CartProduct from './Cart/CartProduct'

const Cart = ({ cartHidden }) => {

  const [cartProducts, setCartProducts] = useState()
  const [totalValueCart, setTotalValueCart] = useState()



  const getAllProducts = () => {
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(url, getConfig())
      .then(res => setCartProducts(res.data.data.cart.products))
      .catch(err => console.log('No hay productos'))
  }

  const navigate = useNavigate()


  useEffect(() => {
    getAllProducts()
  }, [])


  useEffect(() => {
    const init = 0
    const arr = cartProducts?.map(product => parseInt(product.price))
    const result = arr?.reduce((previous, current) => previous + current, init)
    setTotalValueCart(result)
    getAllProducts()
  }, [cartProducts])


  return (
    <section className={`side__cart ${cartHidden ? 'cart__hidden' : ''} `} >
      <h2>Cart</h2>
      <div className="card__products_container">
        <div className="products__in__cart">
          {cartProducts && cartProducts.map(product => <CartProduct key={product.id} product={product} />)}
        </div>
        <div className="actions">
          <label><strong>{totalValueCart}</strong></label>
          <button onClick={() => navigate('/checkout')}>Checkout</button>

        </div>

      </div>
    </section>
  )
}

export default Cart