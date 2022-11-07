
import axios from "axios";
import React, { useState } from "react";
import '../styles/Checkout.css'
import getConfig from "../utils";


const data = {
    "street": "Green St. 1456",
    "colony": "Southwest",
    "zipCode": 12345,
    "city": "USA",
    "references": "Some references"
  }

const Checkout = () => {

    const [cardNumber, setCardNumber] = useState()
    const [month, setMonth] = useState()
    const [year, setYear] = useState()
    const [cvv, setCvv] = useState()


    const purchase = e => {
        e.preventDefault()
        const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        axios.post(url, data, getConfig())
          .then(res => {
            console.log(res.data)
          })
          .catch(err => console.log(err))
      }

      const creditCardNumber = e => {
        setCardNumber(e.target.value)
      }
      const creditCardMonthNumber = e => {
        setMonth(e.target.value)
      }
      const creditCardYearNumber = e => {
        setYear(e.target.value)
      }
      const creditCardCvvNumber = e => {
        setCvv(e.target.value)
      }

    return (
        <div className="checkout__container">
            <div className="checkout__card__design">
                <div className="card__container">
                    <img className='card__front' src="card-front.png" alt="" />
                    <label className="card__number" htmlFor="card_number">{cardNumber}</label>
                    <label className="card__name" htmlFor="card_number">Deriam Suarez</label>
                    <label className="card__date" htmlFor="card_number">{month}/{year}</label>
                </div>
                <div className="card__container">
                    <img className='card__back' src="card-back.png" alt="" />
                    <label className="card__cvv" htmlFor="card_number">{cvv}</label>
                </div>
            </div>
            <div className="checkout__form">
                <form onSubmit={purchase} className='form__full' action="">
                    <h2>Add Card</h2>
                    <input id="card" onChange={creditCardNumber} type="text" />
                    <div className="exp__date_container">
                        <div className="exp__container">
                            <label className="exp_label" htmlFor="">Exp date MM/YY</label>
                            <div className="inputs__container">
                                <input onChange={creditCardMonthNumber} type="text" />
                                <input onChange={creditCardYearNumber}  type="text" />
                            </div>
                        </div>
                        <div className="cvv__container">
                            <label className="exp_label" htmlFor="">CVV</label>
                            <input onChange={creditCardCvvNumber}  type="text" />
                        </div>
                    </div>
                    <button>Checkout</button>
                </form>
            </div>
        </div>
    )

}

export default Checkout