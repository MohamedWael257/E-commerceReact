import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Fashiondigital.css'
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from "../../../../redux/slice/cartslice";
import { FiHeart } from "react-icons/fi";

function Fashiondigital() {
    const dispatch = useDispatch()
    const [productsfashion, setProductsfashion] = useState([])
    const [productsfashion2, setProductsfashion2] = useState([])
    const [productsdigital, setProductsdigital] = useState([])
    const [bags, setBags] = useState([])
    const [womenwatchesitem, setWomenwatchesitem] = useState([])
    const [menwatchesitem, setMenwatchesitem] = useState([])
    const [jEWLLERYitem, setJEWLLERYitem] = useState([])
    const [tshirtitem, setTshirtitem] = useState([])
    const [womenitem, setWomenitem] = useState([])
    const [menclothesitem, setMenclothesitem] = useState([])
    const [topsitem, setTopsitem] = useState([])
    const [phoneitem, setPhoneitem] = useState([])
    const [laptopsitem, setLaptopsitem] = useState([])
    const [automotiveitem, setAutomotiveitem] = useState([])
    const [motorcycleitem, setMotorcycleitem] = useState([])
    useEffect(() => {
        axios.get("https://e-commerce-e0556-default-rtdb.firebaseio.com/products.json")
            // axios.get("/db/products.json")
            .then(res => {
                setBags(res.data.bags_item)
                setWomenwatchesitem(res.data.Women_watches_item)
                setMenwatchesitem(res.data.men_watches_item)
                setJEWLLERYitem(res.data.JEWLLERY_item)
                // 
                setTshirtitem(res.data.tshirt_item)
                // setWomenitem(res.data.)
                setMenclothesitem(res.data.menclothes_item)
                setTopsitem(res.data.tops_item)
                // 
                setPhoneitem(res.data.phone_item)
                setLaptopsitem(res.data.laptops_item)
                setAutomotiveitem(res.data.automotive_item)
                setMotorcycleitem(res.data.motorcycle_item)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <section className="fashionn digital">
                <div className="offers">
                    <div className="shop-now">
                        <img src="https://i.ibb.co/G79dWw4/banner1.png" alt="" className=" w-100 banner1" />
                        <button className="btn btn-dark text-white">Shop now</button>
                        <div className="add bg-white">
                            <button className="btn btn-dark text-white">add to cart</button>
                            <h3 className="text-white bg-dark"><FiHeart /></h3>
                        </div>
                    </div>
                    <div className="recommended-items">
                        <button className="recommended btn bg-dark text-center text-white">
                            <i className="fa-brands fa-connectdevelop"></i>
                            Recommended Items
                        </button>
                        <div className="card" style={{ cursor: "pointer" }}>
                            <img src={require("../../../../assets/recommended1.png")} alt="" />
                            <p>Skin Beauty Serum.</p>
                            <span className="text-warning">EGB276</span>
                            <div className="add bg-white">
                                <button className="btn btn-dark text-white">add to cart</button>
                                <h3><FiHeart /></h3>
                            </div>
                        </div>
                        <div className="card" style={{ cursor: "pointer" }}>
                            <img src={require("../../../../assets/recommended2.jpg")} alt="" />
                            <p>Hyaluronic Acid Serum</p>
                            <span className="text-warning">EGB114</span>
                            <div className="add bg-white">
                                <button className="btn btn-dark text-white">add to cart</button>
                                <h3><FiHeart /></h3>
                            </div>
                        </div>
                        <div className="card" style={{ cursor: "pointer" }}>
                            <img src={require("../../../../assets/recommended3.jpg")} alt="" />
                            <p>TRee Oil 30ml</p>
                            <span className="text-warning">EGB72</span>
                            <div className="add bg-white">
                                <button className="btn btn-dark text-white">add to cart</button>
                                <h3><FiHeart /></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="typesofcategories">
                    <i className="fa-solid fa-shirt me-2 font-14"></i>
                    <span>Fashion & ACCESSORIES</span>
                    <div className="line"></div>
                    <div className="fashion-accessories">
                        <div className="fparent" height={300}>
                            <div className="sparent">
                                <div className="lparent">
                                    <div className="child bags" onClick={() => setProductsfashion(bags)}>
                                        <img src={require("../../../../assets/bags1.jpg")} alt="" />
                                        <p>BAGS</p>
                                    </div>
                                    <div className="child womanwatches" onClick={() => setProductsfashion(womenwatchesitem)}>
                                        <img src={require("../../../../assets/womanwatch3.jpg")} alt="" />
                                        <p>WOMEN WATCES </p>
                                    </div>
                                </div>
                                <div className="lparent ">
                                    <div className="child menwatches" onClick={() => setProductsfashion(menwatchesitem)}>
                                        <img src={require("../../../../assets/manwatches.jpg")} alt="" />
                                        <p>MEN WATCES </p>
                                    </div>
                                    <div className="child jewllery" onClick={() => setProductsfashion(jEWLLERYitem)}>
                                        <img src={require("../../../../assets/jewllery.jpg")} alt="" />
                                        <p>JEWLLERY</p>
                                    </div>
                                </div>
                            </div>
                            <Carousel className="carsu" data-bs-theme="dark">
                                {
                                    productsfashion.map(ele => {
                                        return (
                                            <Carousel.Item height={300}>
                                                <div class=" d-flex justify-content-between">
                                                    <div class="details">
                                                        <p>{ele.title}</p>
                                                        <div class="star text-warning font-12">
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-regular fa-star"></i>
                                                        </div>
                                                        <span class="text-warning">${ele.price}</span>
                                                        <div class="buy-favourite">
                                                            <span>
                                                                <button class="btn btn-dark text-white py-2 me-2" onClick={() => dispatch(addtocart(ele))}>
                                                                    <i class="fa-solid fa-bag-shopping me-3"></i>Add
                                                                    to cart
                                                                </button>

                                                            </span>
                                                            <span><i class="fa-solid fa-heart icon-2 p-2 fs-4"
                                                                style={{ border: "1px solid black;" }}></i></span>
                                                        </div>
                                                    </div>
                                                    <div class="imgg w-50 h-50">
                                                        <img src={ele.ImageUrl} class="w-100 h-50 mt-4" alt="" />
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                        <div className="fparent" style={{ borderTop: "2px solid black" }}>
                            <div className="sparent">
                                <div className="lparent">
                                    <div className="child tshirt" onClick={() => setProductsfashion2(tshirtitem)}>
                                        <img src={require("../../../../assets/t-shirt.jpg")} alt="" />
                                        <p>T-SHIRT</p>
                                    </div>
                                    <div className="child women" onClick={() => setProductsfashion2(womenitem)}>
                                        <img src={require("../../../../assets/woman.jpg")} alt="" />
                                        <p>WOMEN </p>
                                    </div>
                                </div>
                                <div className="lparent">
                                    <div className="child menclothes" onClick={() => setProductsfashion2(menclothesitem)}>
                                        <img src={require("../../../../assets/manclothes.jpg")} alt="" />
                                        <p>MEN CLOTHES </p>
                                    </div>
                                    <div className="child tops" onClick={() => setProductsfashion2(topsitem)}>
                                        <img src={require("../../../../assets/tops.jpg")} alt="" />
                                        <p>TOPS</p>
                                    </div>
                                </div>
                            </div>
                            <Carousel className="carsu" data-bs-theme="dark" >
                                {
                                    productsfashion2.map(ele => {
                                        return (
                                            <Carousel.Item height={300}>
                                                <div class=" d-flex justify-content-between">
                                                    <div class="details">
                                                        <p>{ele.title}</p>
                                                        <div class="star text-warning font-12">
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-regular fa-star"></i>
                                                        </div>
                                                        <span class="text-warning">${ele.price}</span>
                                                        <div class="buy-favourite">
                                                            <span>
                                                                <button class="btn btn-dark text-white py-2 me-2" onClick={() => dispatch(addtocart(ele))}>
                                                                    <i class="fa-solid fa-bag-shopping me-3"></i>Add
                                                                    to cart
                                                                </button>

                                                            </span>
                                                            <span><i class="fa-solid fa-heart icon-2 p-2 fs-4"
                                                                style={{ border: "1px solid black;" }}></i></span>
                                                        </div>
                                                    </div>
                                                    <div class="imgg w-50">
                                                        <img src={ele.ImageUrl} class="w-100 h-50 mt-4" alt="" />
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
                    <i className="fa-solid fa-laptop me-2 font-14"></i>
                    <span>Digital Electronic</span>
                    <div className="line"></div>
                    <div className="digital-electromic">
                        <div className="fparent">
                            <div className="sparent">
                                <div className="lparent">
                                    <div className="child phone" onClick={() => setProductsdigital(phoneitem)}>
                                        <img src={require("../../../../assets/phone.jpg")} alt="" />
                                        <p>PHONE</p>
                                    </div>
                                    <div className="child laptops" onClick={() => setProductsdigital(laptopsitem)}>
                                        <img src={require("../../../../assets/laptop4.png")} alt="" />
                                        <p>LAPTOPS </p>
                                    </div>
                                </div>
                                <div className="lparent">
                                    <div className="child automotive" onClick={() => setProductsdigital(automotiveitem)}>
                                        <img src={require("../../../../assets/automotive.jpg")} alt="" />
                                        <p>AUTOMOTIVE </p>
                                    </div>
                                    <div className="child motorcycle" onClick={() => setProductsdigital(motorcycleitem)}>
                                        <img src={require("../../../../assets/motorcycle.jpg")} alt="" />
                                        <p>MOTORCYCLE</p>
                                    </div>
                                </div>
                            </div>
                            <Carousel className="carsu" data-bs-theme="dark">
                                {
                                    productsdigital.map(ele => {
                                        return (
                                            <Carousel.Item height={300}>
                                                <div class=" d-flex justify-content-between">
                                                    <div class="details">
                                                        <p>{ele.title}</p>
                                                        <div class="star text-warning font-12">
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-regular fa-star"></i>
                                                        </div>
                                                        <span class="text-warning">${ele.price}</span>
                                                        <div class="buy-favourite">
                                                            <span>
                                                                <button class="btn btn-dark text-white py-2 me-2" onClick={() => dispatch(addtocart(ele))}>
                                                                    <i class="fa-solid fa-bag-shopping me-3"></i>Add
                                                                    to cart
                                                                </button>

                                                            </span>
                                                            <span><i class="fa-solid fa-heart icon-2 p-2 fs-4"
                                                                style={{ border: "1px solid black;" }}></i></span>
                                                        </div>
                                                    </div>
                                                    <div class="imgg w-50">
                                                        <img src={ele.ImageUrl} class="w-100 h-50 mt-4" alt="" />
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Fashiondigital; 