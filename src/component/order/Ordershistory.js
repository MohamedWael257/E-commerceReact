import React from "react";
import "./Ordershistory.css"
import { ordershistory } from "../../redux/slice/orderslice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Ordershistory() {
    const orders = useSelector(ordershistory)
    const navigate = useNavigate();
    const toorderdetail = (id) => {
        navigate(`/orderdetails/${id}`);
    }

    return (
        <>
            <div className="cont" >
                <h2>Order History</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>s/n</th>
                            <th>Date</th>
                            <th>Order ID</th>
                            <th>Order Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => {
                            return (
                                <tr key={index} className="pointerrow" onClick={() => toorderdetail(order.id)}>
                                    <td>{index}</td>
                                    <td>
                                        {order.orderdate}
                                    </td>
                                    <td>{order.id.substring(0, 10)}....</td>
                                    <td>{order.orderamount}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </>
    )
}
export default Ordershistory