import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Header from './Header'
import '../../styles/Layout.css'
import Cart from '../Cart'

const Layout = ({theme, setTheme, setSearch, filter, setFilter}) => {
  const [sideBarHidden, setSideBarHidden] = useState(true)               
  const [cartHidden, setCartHidden] = useState(true)               
  return (
    <div className='Layout'>
        <SideBar
        sideBarHidden={sideBarHidden}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}/>
        <Cart cartHidden={cartHidden} />
        <Header theme={theme} setTheme={setTheme} sideBarHidden={sideBarHidden}  setSideBarHidden={setSideBarHidden} cartHidden={cartHidden} setCartHidden={setCartHidden}/>
        <div className="main">
        <Outlet/>
        </div>
    </div>
  )
}

export default Layout