import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PurchaseCardDetails from '../components/Purchases/PurchaseCardDetails'
import getConfig from '../utils'
import '../styles/Purchase.css'

const PurchaseDetails = () => {

    const { id } = useParams()

    const [purchaseList, setPurchaseList] = useState()
    const [purchases, setPurchases] = useState()

    useEffect(() => {
        const url = `https://ecommerce-api-react.herokuapp.com/api/v1/purchases/`
        axios.get(url, getConfig())
            .then(res => setPurchaseList(res.data.data.purchases))
            .catch(err => console.log(err))
    }, [])

    const purchaseSelected = purchaseList?.find(product => product.cartId == id)

    console.log(purchaseSelected?.cart.products)

    console.log(purchases)
    return (<div className='purchases__full__container'>
        <h2>products Bought in Invoice #{id}</h2>
        <div className='purchases__container'>
            {purchaseSelected && purchaseSelected.cart.products.map(product => <PurchaseCardDetails key={product.id} product={product} />)}
        </div>
    </div>
    )
}

export default PurchaseDetails