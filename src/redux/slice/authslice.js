import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    users: [],
    accauntname: null,
    isloading: true
}
let allusers;
if (localStorage.users != null) {
    allusers = JSON.parse(localStorage.users)
}
else {
    allusers = [];
}
const authslice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addActiveUserHandler: (state, action) => {
            state.isloading = true;
            const username = action.payload.username;
            const email = action.payload.email;
            const password = action.payload.password
            const cPassword = action.payload.cPassword
            const findemail = allusers.findIndex((obj) => obj.email === email)
            const finduser = allusers.findIndex((obj) => obj.username === username)
            if (finduser < 0 && findemail < 0 && password === cPassword) {
                let user = {
                    id: state.users.length,
                    username: username,
                    email: email,
                    password: password
                }
                allusers.push(user)
                localStorage.setItem('users', JSON.stringify(allusers))
                state.users = allusers
                state.accauntname = username
                let account = {
                    username: username
                }
                localStorage.setItem("account", JSON.stringify(account));
                toast.success("user added successfully")
            }
            else {
                toast.warning("user is already exists")
            }
        },
        setActiveUserHandler: (state, action) => {
            const email = action.payload.email;
            const password = action.payload.password
            allusers.filter((ele) => {
                if (ele.email === email && ele.password === password) {
                    state.accauntname = ele.username
                    let account = {
                        username: ele.username
                    }
                    localStorage.setItem("account", JSON.stringify(account));
                    toast.success("user logged successfully")
                }
                else {
                    toast.warning("email or password is not valid")
                }
                // else if (email === "admin" && password === "admin") {
                //     let admin = {
                //         username: "admin",
                //         password: "admin"
                //     }
                //     localStorage.removeItem("account")
                //     localStorage.setItem("admin", JSON.stringify(admin));
                //     navigate("/Home")
                // }
            })

        },
        removeActiveUserHandler: (state) => {
            state.isloading = false;
            state.accauntname = null
            localStorage.removeItem("account");
        },
    },
})
export const users = state => state.auth.users
export const accauntname = state => state.auth.accauntname
export const isloading = state => state.auth.isloading
export const { addActiveUserHandler, setActiveUserHandler, removeActiveUserHandler } = authslice.actions
export default authslice
