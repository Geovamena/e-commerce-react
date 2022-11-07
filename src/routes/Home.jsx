import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardsContainer from '../components/CardsContainer'
import Search from '../components/Search'
import { getAllProducts } from '../store/slices/products.slice'
import '../styles/Home.css'


const Home = ({search, setSearch}) => {

  const dispatch = useDispatch()

  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])


  const actionOnchange = () => {
    let productsSearch = [];
    products.forEach(product => {
      if (product.title.includes(searchInput.value)) {
        productsSearch.push(product)
      }      
      setSearch(productsSearch)
    });
  }

  
  return (
    <div className='home'>
      <Search actionOnchange={actionOnchange} />
      {search ? <CardsContainer products={search}/> : <CardsContainer products={products}/> }
    </div>
  )
}

export default Home