import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    productdata: [],
    suffleproducts: [],
    minPrice: 5,
    maxPrice: 5,
}

// export const getProducts = createAsyncThunk('products/getProducts', async () => {
//     const res = await axios.get("https://e-commerce-e0556-default-rtdb.firebaseio.com/products.json")
//     return res.data
// });
export const getProducts = createAsyncThunk('products/getProducts', async () => {
    return await axios.get("https://e-commerce-e0556-default-rtdb.firebaseio.com/products.json")
        .then(res => res.data.products)
        .catch((error) => console.log(error))
});
const productslice = createSlice({
    name: "products",
    initialState,
    reducers: {
        pricerange(state) {
            const pricearray = [];
            state.productdata.map((pro) => {
                const price = pro.price;
                return pricearray.push(price);
            })
            const max = Math.max(...pricearray);
            const min = Math.min(...pricearray);
            state.minPrice = min;
            state.maxPrice = max;
        },
        shuffle(state, action) {
            const products = action.payload
            for (let i = products.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [products[i], products[j]] = [products[j], products[i]]
            }
            state.suffleproducts = products
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, () => { })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            // console.log(action);
            state.productdata = action.payload
            // for (const key in action.payload) {
            //     state.productdata.push({
            //         id: key,
            //         brand: action.payload[key].brand,
            //         category: action.payload[key].category,
            //         description: action.payload[key].description,
            //         title: action.payload[key].title,
            //         ImageUrl: action.payload[key].image,
            //         price: action.payload[key].price
            //     })
            // }

        })
        builder.addCase(getProducts.rejected, () => { })
    }
});
export default productslice;
export const { pricerange, shuffle } = productslice.actions
export const productdata = (state) => state.product.productdata;
export const suffledata = (state) => state.product.suffleproducts;
export const minrange = (state) => state.product.minPrice;
export const maxringe = (state) => state.product.maxPrice;
