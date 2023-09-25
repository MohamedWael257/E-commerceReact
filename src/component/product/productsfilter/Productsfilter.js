import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../Product.css"
import axios from 'axios'
import Productsitem from '../productsitem/Productsitem'
import { useDispatch, useSelector } from 'react-redux'
import { filterBySearch } from '../../../redux/slice/filterslice'
import { getProducts, productdata } from '../../../redux/slice/productslice'

function Productsfilter() {
    // const prod = useSelector(productdata)
    const [inputsearch, setInputsearch] = useState("")
    const [type, setType] = useState([])
    const [products, setProducts] = useState([])
    const [afterfilter, setAfterfilter] = useState([])
    const currentproduct = afterfilter.length === 0 ? products : afterfilter;
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get("https://e-commerce-e0556-default-rtdb.firebaseio.com//products.json")
            .then(res => {
                setProducts(res.data.products)
            })
            .catch(err => console.log(err))
    }, [])

    // useEffect(() => {
    //     let temp=[];
    //     prod.map(product=>{temp.push(product)})   
    //     setProducts(temp)
    //     console.log(products);
    // }, [prod, setProducts, products])
    const category = [
        "All",
        ...new Set(products.map((product) => product.category)),
    ];
    const filterbycategory = (categorey) => {
        let arr = []
        if (categorey !== 'All') {
            products.map((ele) => {
                if (ele.category === categorey) {
                    arr.push(ele)
                    setAfterfilter(arr)
                }
            })
        }
        else {
            setAfterfilter(products)
        }
    }
    const search = (searchvl) => {
        setInputsearch(searchvl)
        let temp = []
        products.filter((product) => {
            if (product.description.toLowerCase().includes(inputsearch.toLowerCase())) {
                temp.push(product)
                setAfterfilter(temp)
            }
        })
    }
    // useEffect(() => {
    //     dispatch(filterBySearch({ product: products, search: inputsearch }))
    // }, [dispatch, inputsearch, products])
    // const filterbycategory = (e) => {
    //     const cat = e.target.value
    //     dispatch(filterByCategory({ products, category: cat }));
    // }
    return (

        <>
            <div className="filter">
                <h6>{type} Products</h6>
                <div className=" select">
                    <label className="me-2 click">Categories</label>
                    <input type='text' className='searchinput' value={inputsearch} placeholder='search' onChange={(e) => search(e.target.value)} />
                    <select aria-label="Default select example" className='text-dark form-select' onChange={(e) => {
                        setType(e.target.value);
                        filterbycategory(e.target.value);
                    }}>
                        {category.map((cat, index) => {
                            return (
                                <option key={index} value={cat}>{cat}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <section className="aproducts">
                <Productsitem pro={currentproduct} />
            </section>

        </>
    )
}

export default Productsfilter