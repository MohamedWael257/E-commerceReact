import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Categories.css'
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch } from 'react-redux';
import { addtocart } from "../../../../redux/slice/cartslice";
import { FiHeart } from "react-icons/fi";

function Categories() {
    const dispatch = useDispatch()
    const [ele, setEle] = useState({
        "id": 0,
        "brand": "Apple",
        "category": "smartphones",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with...",
        "title": "iPhon X",
        "ImageUrl": "https://i.dummyjson.com/data/products/2/1.jpg",
        "price": "899"
    })
    return (
        <>
            <section className="categories">
                <div className="list">
                    <div className="allcategories">
                        <h6>all categories</h6>
                        <a href="">Fashion</a>
                        <a href="">Smart Devices</a>
                        <a href="">Food</a>
                        <a href="">Personal Care</a>
                        <a href="#">Home</a>
                    </div>
                    <div className="trending-search">
                        <h6>trending search </h6>
                        <a href="">MacBook Pro</a>
                        <a href="">Formal T-shirt</a>
                        <a href="">Scan Care</a>
                        <a href="">Casual</a>
                        <a href="">Tree Oli</a>
                        <a href="">Laptops</a>
                        <a href="">Redmi 9T</a>
                        <a href="">Samsung Galaxy</a>
                        <a href="">Casual</a>
                        <a href="">Tree Oli</a>
                        <a href="">Laptops</a>
                        <a href="">Redmi 9T</a>
                        <a href="">Samsung Galaxy</a>
                    </div>
                </div>
                <div className="details">
                    <div className="offer">
                        <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    height={400}
                                    src={require('../../../../assets/4.jpg')}
                                    alt="First slide" />
                                {/* <Carousel.Caption>
                                    <h5>First slide label</h5>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    height={400}
                                    src={require('../../../../assets/3.jpg')}
                                    alt="Second slide"
                                />
                                {/* <Carousel.Caption>
                                    <h5>Second slide label</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    height={400}
                                    src={require('../../../../assets/1.jpg')}
                                    alt="Third slide"
                                />
                                {/* <Carousel.Caption>
                                    <h5>Third slide label</h5>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        </Carousel>
                        <div className="limitedoffer addtoproductcart">
                            <img alt="" className="cards" src={require('../../../../assets/offer.jpg')} />
                            <p className="bg-dark text-white text-center p-2" style={{ cursor: "pointer" }}>For limited period</p>
                            <p className="title">SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12
                                Bionic chip with...</p>
                            <span className="text-warning">EGP 4495</span>
                            <span className="text-decoration-line-through text-light-white">EGP 6293</span>
                            <div className="add bg-white">
                                <button className="btn btn-dark text-white" onClick={() => dispatch(addtocart(ele))}>add to cart</button>
                                <h3><FiHeart /></h3>
                            </div>
                        </div>
                    </div>
                    <div className="categories-cards">
                        <div className="img-card c1">
                            <p>Woman Fashion</p>
                        </div>
                        <div className="img-card c2">
                            <p>Man Fashion</p>
                        </div>
                        <div className="img-card c3">
                            <p>Laptos</p>
                        </div>
                        <div className="img-card c4">
                            <p>Smart Device</p>
                        </div>
                        <div className="img-card c5">
                            <p>Food & Resturant</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Categories; 