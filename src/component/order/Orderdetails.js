import React, { useEffect } from "react";
import "./Orderdetails.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailofselectedorder, selectedorder } from "../../redux/slice/orderslice"
const Orderdetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const theorder = useSelector(selectedorder);
    useEffect(() => {
        dispatch(detailofselectedorder(id));
    }, [dispatch, id])
    return (
        <div className="cont">
            <h2>Order Details</h2>
            <p><b>Order ID :</b>{theorder[0]?.id}</p>
            <p><b>Order Amount :</b>{theorder[0]?.orderamount}</p>
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th>s/n</th>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {theorder[0]?.orderitem.map((order, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{order.title}</td>
                                    <td>{order.description}</td>
                                    <td>{+order.price}</td>
                                    <td><img className="tdimg" src={order.ImageUrl} style={{ padding: "10px" }} /></td>
                                    <td>{order.itemquantity}</td>
                                    <td>{+order.price * order.itemquantity}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
        </div>
    )
}
export default Orderdetails