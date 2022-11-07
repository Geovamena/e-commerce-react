import React from 'react'

const PurchaseCardDetails = ({ product }) => {
  return (
    <div id='purchase__in' className='card__product'>
      <div className="card__product_info">
        <h3 className="product__name">{product.title}</h3>
        <label htmlFor="price">price</label>
        <h4>{product.price}</h4>
      </div>
    </div>
  )
}

export default PurchaseCardDetails