import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Featureitems.css'
import axios from "axios";
import { addtocart } from "../../../../redux/slice/cartslice";
import { useDispatch } from "react-redux";
import { FiHeart } from "react-icons/fi";

function Featureitems() {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get("https://e-commerce-e0556-default-rtdb.firebaseio.com/products.json")
            // axios.get("/db/products.json")
            .then(res => {
                setProducts(res.data.feature_items)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <section className="feature-items">
                <i className="fa-solid fa-award me-2 font-16"></i>
                <span>FEATURE ITEMS</span>
                <div className="line"></div>
                <div className="content">
                    {
                        products.map((item) => {
                            return (
                                <div key={item.id} className="cardition">
                                    <div className="card-img">
                                        <img src={item.ImageUrl} alt="" />
                                    </div>
                                    <div className="card-details">
                                        <p>{item.description}</p>
                                        <div className="star text-warning font-12">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </div>
                                        <span>
                                            <span className="text-warning me-2">${item.price}</span>
                                            <span className="text-decoration-line-through" style={{ color: "#555454" }}>${item.price}</span>
                                        </span>
                                    </div>
                                    <div className="add bg-white">
                                        <button className="btn btn-dark text-white" onClick={() => dispatch(addtocart(item))}>add to cart</button>
                                        <h3><FiHeart /></h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section >
        </>
    )
}
export default Featureitems; 