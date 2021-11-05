import { useState } from "react";
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as actionCreators from "../store/action-creators"
import * as caller from "../helpers/apiCaller"
import { api } from "../config/api"

const Signup = () => {

    const { addUser } = bindActionCreators(actionCreators, useDispatch())

    const [error, setError] = useState({
        error: false,
        message: ''
    })

    let defaultInfo = {
        dni: '',
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    }

    const [userInfo, setUserInfo] = useState(defaultInfo)

    const handleChange = e => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {
        let data = await caller.create(api.users.create, userInfo)
        if (!data.ok) {
            return setError({
                ...error,
                error: true,
                message: data.message
            })
        }

        addUser(data.user)
        localStorage.setItem('token', data.token)
        setUserInfo(defaultInfo)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '20%', margin: 'auto' }}>
            <h3>Signup</h3>
            {error ? <h5>{error.message}</h5> : null}
            <label>DNI: </label>
            <input
                type="text"
                name="dni"
                required
                value={userInfo.dni}
                onChange={handleChange}
            />
            <label>Firstname: </label>
            <input
                type="text"
                name="first_name"
                required
                value={userInfo.first_name}
                onChange={handleChange}
            />
            <label>Lastname: </label>
            <input
                type="text"
                name="last_name"
                required
                value={userInfo.last_name}
                onChange={handleChange}
            />
            <label>Email: </label>
            <input
                type="email"
                name="email"
                required
                value={userInfo.email}
                onChange={handleChange}
            />
            <label>Password: </label>
            <input
                type="password"
                name="password"
                required
                value={userInfo.password}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Signup</button>
        </div>
    );
}

export default Signup