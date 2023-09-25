import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Auth.css'
import { useDispatch } from 'react-redux';
import { setActiveUserHandler } from '../../redux/slice/authslice';
import { toast } from 'react-toastify';
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const loginuser = (e) => {
        e.preventDefault();
        dispatch(setActiveUserHandler({ email, password }))
        navigate('/Home')
    }
    return (
        <>
            <div className="sgnin w-100 py-4 bg-dark">
                <div className="form-box w-50 m-auto p-4">
                    <h2 className="text-center">Login</h2>
                    <form action="/Home" onSubmit={loginuser}>
                        <div className="input-box">
                            <span className="erroremail error text-danger"></span>
                            <span className="icon">
                                <ion-icon name="mail"></ion-icon>
                            </span>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />                            <label>Email</label>
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
                        <input type="submit" id="login_btn" className="btn" value="Register" />
                        <div className="login-register">
                            <p className="text-dark">Already have an acoount?
                                <a href="/Register" className="login-link">Register</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login