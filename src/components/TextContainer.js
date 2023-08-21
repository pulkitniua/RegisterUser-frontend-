import React from 'react';
import axios from 'axios';
import { useState } from "react";
const TextContainer = () => {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/v1/employee/save",
                {

                    username: name,
                    address: address,
                    mobile: mobile,
                    password: password

                });
            alert("User Registration Successfull");

            setName("");
            setAddress("");
            setMobile("");
            setPassword("");
        }

        catch (err) {

            alert("User Registation Failed");
        }
    }


    return (
        <div className="main-container">
            <label>Enter Name </label>
            <input type="text" className="widthbox" name="name" value={name} onChange={e => {
                setName(e.target.value);
            }}></input>

            {/* <label>Enter Password  </label>
            <input type="password" className="widthbox" name="password" ></input>  */}
            <label>Enter Address </label>
            <input type="text" className="widthbox" name="address" value={address} onChange={e => {
                setAddress(e.target.value);
            }}></input>

            <label>Enter Mobile Number </label>
            <input type="number" className="widthbox" name="mobile" value={mobile} onChange={e => {
                setMobile(e.target.value);
            }}></input>

            <label>Enter Password</label>
            <input type="password" name="password" value={password} onChange={e => {
                setPassword(e.target.value);
            }} />

            <div className="btn-container">
                <input type="submit" id="btn" onClick={save} />
            </div>
        </div>
    )
}
export default TextContainer;

