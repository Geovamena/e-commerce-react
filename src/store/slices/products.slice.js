import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        setProducts: (state, action) => action.payload

    }
})  

export const {setProducts} = productsSlice.actions

export default productsSlice.reducer

export const getAllProducts = () => (dispatch) => {
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'
    axios.get(url)
    .then(res => dispatch(setProducts(res.data.data.products)))
    .catch(err => console.log(err.response))
}