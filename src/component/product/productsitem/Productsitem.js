import React, { useEffect, useState } from 'react'
import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../Product.css"
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../../../redux/slice/cartslice';
import { shuffle, suffledata } from '../../../redux/slice/productslice';
import { useNavigate } from 'react-router-dom';
function Productsitem(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const products = props.pro
    // function shuffle(arr) {
    //     for (let i = arr.length - 1; i > 0; i--) {
    //         let j = Math.floor(Math.random() * (i + 1));
    //         [arr[i], arr[j]] = [arr[j], arr[i]]
    //     }
    //     return arr
    // }
    // shuffle(products)
    // const products = useSelector(suffledata)
    // useEffect(() => {
    //     dispatch(shuffle(props.pro))
    // }, [props.pro])
    return (
        <>
            {
                products.map((ele, index) => {
                    return (
                        <div className="product-card" key={index}>
                            <div className="card-img">
                                <img src={ele.ImageUrl} alt="" />
                            </div>
                            <div className="card-details">
                                <p className="text-center" style={{ color: "red" }}>{ele.description}</p>
                                <span className="text-dark me-2">{ele.price} EGB</span>
                            </div>
                            <div className='addtocart'>
                                <button onClick={() => dispatch(addtocart(ele))}><FiShoppingCart /></button>
                                <button onClick={() => { console.log(ele.id) }}><FiHeart /></button>
                                <button onClick={() => {
                                    navigate(`/productdetails/${ele.id}`)
                                    localStorage.setItem("product", JSON.stringify(ele))
                                }}><FiSearch /></button>
                            </div>

                        </div >
                    )
                })
            }
        </>
    )
}

export default Productsitem