import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Filter = ({ setSearch, filter, setFilter }) => {

    const products = useSelector(state => state.products)

    useEffect(() => {
        if (products) {
            let arrFilter = []
            products.forEach(filter => {
                if (!arrFilter.includes(filter.category.name)) {
                    arrFilter.push(filter.category.name)
                }
            });

            setFilter(arrFilter)
        }
    }, [products])

    const handleFilter = filter => {
        let productsFilter = [];
        products.forEach(product => {
            if (product.category.name.includes(filter)) {
                productsFilter.push(product)
            }
        });

        setSearch(productsFilter)
    }

    const handleFilterPrice = e => {
        e.preventDefault()
        let priceFrom = e.target.priceFrom.value
        let priceTo = e.target.priceTo.value
        let result;

        if (!priceFrom && !priceTo) {
            setSearch(products)
        } else if (priceFrom && !priceTo) {
            result = products.filter(productPrice => parseInt(productPrice.price) >= priceFrom)
            setSearch(result)
        } else if (!priceFrom && priceTo) {
            result = products.filter(productPrice => parseInt(productPrice.price) <= priceTo)
            setSearch(result)
        } else if (priceFrom && priceTo) {
            result = products.filter(productPrice => parseInt(productPrice.price) >= priceFrom && parseInt(productPrice.price) <= priceTo)
            setSearch(result)
        }



    }

    return (
        <div className="filter__types">
            <form onSubmit={handleFilterPrice} className="filter__price">
                <h4>Price</h4>
                <div className="filter__line" />
                <div className="filter__content">
                    <label htmlFor="from">From:</label>
                    <input id='priceFrom' type="number" />
                </div>
                <div className="filter__content">
                    <label htmlFor="to">to:</label>
                    <input id='priceTo' type="number" />
                </div>
                <button type='submit'>Filter Price</button>
            </form>
            <div className="filter__category">
                <h4>Category</h4>
                <div className="filter__line" />
                <ul>
                    <li onClick={() => setSearch()}>All</li>
                    {filter && filter.map(option => <li key={option} onClick={() => handleFilter(option)}>{option}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Filter