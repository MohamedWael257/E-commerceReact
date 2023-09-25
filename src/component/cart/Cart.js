import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa6';
import { PiHeartBreakFill } from "react-icons/pi"
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css'
import { addtocart, cartitem, clearcart, decrease, removefromcart, totalprice, totalquantity } from '../../redux/slice/cartslice';
function Cartpage() {
    const items = useSelector(cartitem)
    const totprice = useSelector(totalprice)
    const totquantity = useSelector(totalquantity)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <>

            <section className="shopping">
                {(items.length > 0) ?
                    <>
                        <div className="shopping-cart ">
                            <div className="head">
                                <span>shopping Cart</span>
                                <span>price</span>
                            </div>
                            <hr />
                            {items.map((ele, index) => {
                                return (
                                    <Fragment key={index}>
                                        <div className='cart'>
                                            <div className="img">
                                                <img src={ele.ImageUrl} alt="" />
                                            </div>
                                            <div className="cart-details">
                                                <div className="title">
                                                    <p> {ele.description}</p>
                                                    <strong>$ {ele.price}</strong>
                                                </div>
                                                <p>{ele.title}</p>
                                                <p>Eligible for FREE delivery</p>
                                                <strong className="d-block">Size: 350 ml</strong>
                                                <button className="increment" style={{ transform: "translate(-10px,6px)" }} onClick={() => { dispatch(addtocart(ele)) }}>+</button>
                                                <span style={{ border: "2px solid black", padding: "5px 20px" }} className='count'>{ele.itemquantity}</span>
                                                <button className="decrement" style={{ transform: "translate(10px, 6px)" }} onClick={() => { dispatch(decrease(ele)) }}>-</button>
                                                {/* <br /> */}
                                                <button className="text-primary border-0 bg-white" style={{ fontSize: "1.3rem", fontWeight: "500", marginLeft: "40px", display: "inline-block" }} onClick={() => dispatch(removefromcart(ele))}> delete</button>
                                                {/* <button className="text-primary border-0 bg-white" value={ele.id} onClick={deletefromcart}> delete</button> */}
                                            </div>
                                        </div>
                                        <hr />
                                        <br></br>
                                    </Fragment>
                                )
                            })}
                            <button className='clear d-inline' onClick={() => { dispatch(clearcart()) }}>Clear Cart</button>
                            <div className="price text-end">
                                <span>Sub({totquantity} items):</span>
                                <span> EGB {totprice}</span>
                            </div>
                            <hr />
                            <br />
                            <br />
                        </div>
                        <div className="buy" >
                            <div className="detail ">
                                <i><FaCheck /></i>
                                <div>
                                    <p>Your first order qualifies for FREE Delivery.
                                        Select this option at checkout.<a href="">Details</a></p>
                                    <div>
                                        <div className="price text-center mb-3">
                                            <span>Sub({totquantity} items):</span>
                                            <span> EGB {totprice}</span>
                                        </div>
                                        <button className='checkoutprocess' onClick={() => { navigate('/Chechout') }}>Process to buy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : <>
                        <div className="nocart bg-dark p-5 text-center ng-star-inserted">
                            <h1><PiHeartBreakFill className='text-warning' size={80} /></h1>
                            <h5 className="text-white">Shopping cart is empty !</h5>
                            <p className="text-white">push some products into your cart</p>
                            <Button href="/home" id='home' >Back To Home</Button>
                        </div>
                    </>
                }
            </section>

        </>
    )
}

export default Cartpage