import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PurchaseCardDetails from '../components/Purchases/PurchaseCardDetails'
import PurchasesCard from '../components/Purchases/PurchasesCard'
import '../styles/Purchase.css'
import getConfig from '../utils'

const Purchase = () => {

  const [purchases, setPurchases] = useState()

  const [id, setId] = useState()
  const [invoice, setInvoice] = useState()

  useEffect(() => {
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(url, getConfig())
      .then(res => setPurchases(res.data.data.purchases))
      .catch(err => console.log(err))
  }, [])


  useEffect(() => {
    const result = purchases?.find(invoiceCart => invoiceCart.cartId == id)

    setInvoice(result?.cart.products)
  }, [id])


  // console.log(invoice)
  return (<>
    <div className="purchases__container">
      <div className="purchases__invoice_container">
        {purchases && purchases.map(purchase => <PurchasesCard key={purchase.id} purchase={purchase} setId={setId} />)}
      </div>
      <div className="invoice">
        <label>Products of invoice #{id}</label>
      <div className="purchases__invoice_details">
    {invoice && invoice.map(product => <PurchaseCardDetails key={product.title} product={product} />)}
      </div>

      </div>
    </div>
  </>

  )
}

export default Purchase