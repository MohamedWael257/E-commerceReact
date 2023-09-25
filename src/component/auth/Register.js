import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import './Auth.css'
import { useDispatch, useSelector } from 'react-redux';
import { addActiveUserHandler, users } from '../../redux/slice/authslice';
function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setcPassword] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const registeruser = (e) => {
        e.preventDefault();
        dispatch(addActiveUserHandler({ username, email, password, cPassword }))
        navigate('/Home')
    }
    return (
        <>
            <ToastContainer />
            <div className="sgnin w-100 py-4 bg-dark">
                <div className="form-box w-50 m-auto p-4 ">
                    <h2 className="text-center">Register</h2>
                    <form action="/Home" onSubmit={registeruser}>
                        <div className="input-box">
                            <span className="errorphone error text-danger"></span>

                            <span className="icon">
                                <ion-icon name="call"></ion-icon> </span>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                            <label>userName</label>
                        </div>
                        <div className="input-box">
                            <span className="erroremail error text-danger"></span>
                            <span className="icon">
                                <ion-icon name="mail"></ion-icon>
                            </span>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <label>Email</label>
                        </div>

                        <div className="input-box">
                            <span className="errorpassword error text-danger"></span>
                            <span className="icon">
                                <ion-icon name="lock-closed"></ion-icon>
                            </span>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <label>Password</label>
                            <div className="strength"></div>
                        </div>
                        <div className="input-box">
                            <span className="errorconfpassword error text-danger"></span>

                            <span className="icon">
                                <ion-icon name="lock-closed"></ion-icon>
                            </span>
                            <input type="password" value={cPassword} onChange={(e) => setcPassword(e.target.value)} required />
                            <label>Confirm Password</label>
                        </div>
                        <button type="submit" id="register_btn" className="btn">Register</button>
                        <div className="login-register">
                            <p className="text-dark">Already have an acoount?
                                <a href="/Login" className="login-link">Login</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register