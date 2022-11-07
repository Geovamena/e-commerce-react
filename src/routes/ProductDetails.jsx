import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getConfig from '../utils'
import '../styles/ProductDetails.css'
import CardProduct from '../components/CardProduct'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/slices/products.slice'
import SimilarsProducts from '../components/SimilarsProducts'

const ProductDetails = () => {
  
  const { id } = useParams()
  const [product, setProduct] = useState()
  const [productCart, setProductCart] = useState()

  const dispatch = useDispatch()
  const products = useSelector(state => state.products)

    useEffect(() => {
      dispatch(getAllProducts())
    }, [])

  useEffect(() => {
    const url = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(url, getConfig())
      .then(res => setProduct(res.data.data.product))
      .catch(err => console.log(err))
  }, [id])

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

useEffect(() => {
  if(product){
    let arrProductsSimilar=[];
      products?.forEach(element => {
         if(element.category.name.includes(product.category) && element.title != product.title){
           arrProductsSimilar.push(element)
     }
    setProductCart(arrProductsSimilar)
    })
  }
}, [product])

  return (
    <div className='product__details_container'>
      <div className="principal__product">
        {product && <CardProduct product={product} handleAddProduct={handleAddProduct} />}
        <div className="principal__product__description">{product?.description}</div>
      </div>
      <div className="similars__products">
        <h2 className="similars__products__titles">Similar products</h2>
      </div>
<SimilarsProducts products={productCart}/>
    </div>
  )
}

export default ProductDetails