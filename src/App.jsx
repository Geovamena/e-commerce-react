import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Login from './routes/Login'
import Purchase from './routes/Purchase'
import ProductDetails from './routes/ProductDetails'
import ProtectedRoutes from './components/shared/ProtectedRoutes'
import Layout from './components/shared/Layout'
import { useEffect, useState } from 'react'
import Checkout from './routes/Checkout'
import axios from 'axios'
import PurchaseDetails from './routes/PurchaseDetails'

function App() {

  const [theme, setTheme] = useState(false)
  const [search, setSearch] = useState()
  const [filter, setFilter] = useState()

  return (
    <div className={`App ${theme ? 'dark' : ''}`}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<Layout
          theme={theme}
          setTheme={setTheme}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter} />}>
          <Route path='/' element={<Home search={search} setSearch={setSearch} />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route element={<Layout 
           theme={theme}
           setTheme={setTheme}
           setSearch={setSearch}
           filter={filter}
           setFilter={setFilter} />}>
            <Route path='/purchase' element={<Purchase />} />
            <Route path='/purchase/:id' element={<PurchaseDetails />} />
            <Route path='/checkout' element={<Checkout />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
