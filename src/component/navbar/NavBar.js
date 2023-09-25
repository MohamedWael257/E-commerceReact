import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLocationDot, FaAmazonPay, FaMagnifyingGlass } from "react-icons/fa6"
import { FiMenu, FiShoppingCart, FiDelete } from "react-icons/fi"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "./NavBar.css"
import { useDispatch, useSelector } from "react-redux";
import { accauntname, removeActiveUserHandler } from "../../redux/slice/authslice";
function NavBar() {
    let allusers = localStorage.getItem('account');
    let account = JSON.parse(allusers);
    const dispatch = useDispatch()
    const [sidenav, setsidenav] = useState(false);
    const navigate = useNavigate()
    const logout = () => {
        dispatch(removeActiveUserHandler())
        navigate("/Home")
    }
    const showsidenav = () => {
        setsidenav(!sidenav);
    }
    return (
        <>
            <ToastContainer />
            <header>
                <div>
                    <div className="logo"><FaAmazonPay /></div>
                    <div className="location ">
                        <FaLocationDot size={20} />
                        <p className="d-inline">derived to</p>
                        <p style={{ transform: "translateX(20px)" }}>Egypt</p>
                    </div>
                </div>
                <button className={`${sidenav ? "showbtn" : "hidebtn"}`} onClick={showsidenav}>{!sidenav ? <FiMenu size={50} /> : <FiDelete size={50} />} </button>
                <nav className={`${sidenav ? "shownav" : ""}`} onClick={showsidenav}>
                    <div className="search">
                        <button>all</button>
                        <input type="search" placeholder="search in Market" />
                        <i><FaMagnifyingGlass size={30} /></i>
                    </div>
                    {account ?
                        <>
                            <Link to="/">Hello {account.username}</Link>
                            <button className="signout" onClick={logout}>Logout</button>
                        </>
                        : <>
                            <Link to="/Register">Register</Link>
                            <Link to="/Login">Login</Link>
                        </>
                    }
                    <Link to="/Products">Products</Link>
                    <Link to="/Orders">Orders</Link>
                    <Link to="/Cart"><FiShoppingCart /> Cart</Link>
                </nav>
            </header>
            <section className="home">
                <Link to="/"><FiMenu style={{ transform: "translateY(-3px)" }} /> All</Link>
                <Link to="/">Fashion</Link>
                <Link to="/">Smart Devices</Link>
                <Link to="/">Food</Link>
                <Link to="/">Personal care</Link>
                <Link to="/">Home</Link>
            </section>
        </>


    )
}
export default NavBar