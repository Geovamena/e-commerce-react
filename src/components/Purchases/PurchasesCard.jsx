import React from 'react'
import { useNavigate } from 'react-router-dom'

const PurchasesCard = ({ purchase, setId }) => {

    const navigate = useNavigate()

    const id = purchase.cartId
    return (<>

{/* navigate(`/purchase/${id}`) */}
        <div onClick={() => setId(purchase.cart.id)} className='purchaseItem'>
            <span>Invoice ID: <strong>{purchase.cart.id}</strong></span>
        </div>
    </>
    )
}

export default PurchasesCard