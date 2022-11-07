import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../../styles/Header.css'
import getConfig from '../../utils'

const Header = ({ theme, setTheme, setSideBarHidden, sideBarHidden, cartHidden, setCartHidden }) => {

    const [cartLength, setCartLength] = useState()

useEffect(() => {

    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(url, getConfig())
      .then(res => setCartLength(res.data.data.cart.products.length))
      // .catch(err => console.log('No hay productos'))
    
  
}, [])


    const logged = localStorage.getItem('token')
    const navigate = useNavigate()


    const handleSwitchTheme = () => {
        setTheme(!theme)
    }

    const handleSideBarSwitch = () => {
        setSideBarHidden(!sideBarHidden)
    }
    const handleCartSwitch = () => {
        if (logged) {
            setCartHidden(!cartHidden)
        } else {
            if (confirm('To open the cart, you need had been logged') == true) {
                navigate('/login')
            }
        }
    }

    return (
        <header className='header'>
            <div className="header__top">
                <i onClick={handleSideBarSwitch} className="fi fi-rr-filter"></i>
                <NavLink className='header__item' to='/'>
                    <h2>e-commerce</h2>
                </NavLink>
            </div>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item"><i onClick={handleSwitchTheme} className="fi fi-rr-moon"></i></li>
                    <div className="line" />
                    <li><NavLink className="header__item" to='/login'><i className="fi fi-rr-user"></i></NavLink></li>
                    <div className="line" />
                    <li><NavLink className="header__item" to='/purchase'><i className="fi fi-rr-box"></i></NavLink></li>
                    <div className="line" />
                    <li onClick={handleCartSwitch} className="header__item"><i className="fi fi-rr-shopping-cart"></i><div className={`circle__count ${cartLength ? '' : 'hidden'}`}><span>{cartLength}</span></div></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header