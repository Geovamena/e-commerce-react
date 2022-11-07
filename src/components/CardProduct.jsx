import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/CardProduct.css'

const CardProduct = ({product, handleAddProduct}) => {

    const navigate = useNavigate()

    const handleNavigateDetails = e => {
        navigate(`/product/${e}`)
    } 

  return (
    <div className='card__product'>
        <div className="card__product_header">
            <img src={product.productImgs[0]}/>
        </div>
        <div className="card__product_info">
            <h3 onClick={() => handleNavigateDetails(product.id)} className="product__name">{product.title}</h3>
            <div className="action__section">
                <div className="product__price_container">
                    <label htmlFor="price">price</label>
                    <h4>{product.price}</h4>
                </div>
                <button onClick={() => handleAddProduct(product.id)}>BUY</button>
            </div>
        </div>
    </div>
  )
}

export default CardProduct