import React, { useState, useEffect, } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import styles from "./Checkout.module.css"
import { cartitem, clearcart, totalprice, totalquantity } from '../../redux/slice/cartslice';
import { toast } from "react-toastify";
import { ordershistory, addorders, getorders } from "../../redux/slice/orderslice"
import Card from "../card/Card";
function Chechout() {
    const items = useSelector(cartitem)
    const totprice = useSelector(totalprice)
    const totquantity = useSelector(totalquantity)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    // let order;
    // if (localStorage.orders != null) {
    //     order = JSON.parse(localStorage.orders)
    // }
    // else {
    //     order = [];
    // }
    // let id=0
    const pay = (e) => {
        e.preventDefault();
        // by post to api
        fetch("https://e-commerce-e0556-default-rtdb.firebaseio.com/orders.json", {
            method: "POST",
            body: JSON.stringify({
                orderdate: dateTime,
                orderamount: totprice,
                orderitem: items,
            })
        })
        dispatch(getorders());
        // bylocalstorage
        // items.map(ele => order.push(ele))
        // localStorage.setItem('orders', JSON.stringify(order))
        dispatch(clearcart());
        toast.success("Payment successful", {
            position: "top-right",
        });
        navigate("/Orders")
        // }

    }
    return (
        <>
            <div className={styles.container}>
                <h2>Checkout</h2>
                <div className={styles.content}>
                    <Card style={styles.checksummery}>
                        <h3>Checkout Summary</h3>
                        <p>{`Cart items (s): ${totquantity}`}</p>
                        <div className={styles.totalprice}>
                            <h4>Subtotal</h4>
                            <h3><b>{`$${totprice.toFixed(2)}`}</b></h3>
                        </div>
                        {items.map((item, index) => {
                            return (
                                <div key={index} className={styles.summarycard}>
                                    <h4>Product : {item.title}</h4>
                                    <p>Quantity : {item.itemquantity}</p>
                                    <p>Unit Price: {item.price}</p>
                                    <p>Set Price : {item.itemquantity * item.price} </p>
                                </div>
                            )

                        })}
                    </Card>
                    <Card style={styles.paycard}>
                        <h3>Checkout Summary</h3>
                        <form onSubmit={pay}>
                            <label>Card number</label>
                            <input type="text" placeholder="4242 4242 4242 4242" />
                            <div className={styles.payexpire}>
                                <div>
                                    <label>Expiration</label>
                                    <input type="text" placeholder="04 / 24" />
                                </div>
                                <div>
                                    <label>CVC</label>
                                    <input type="text" placeholder="CVC" />
                                </div>
                            </div>
                            <label>Country</label>
                            <input type="text" placeholder="Enter Your Country" />
                            <button type="submit">Pay now</button>
                        </form>
                    </Card>
                </div>
            </div>
        </>
    )
}
export default Chechout