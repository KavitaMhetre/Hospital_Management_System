import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import Logo from "./Logo"
import Bottom from "./Bottom"

const Register = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function handleClick(){
        const formData = {
            name:name,
            email:email,
            password:password
        }
        axios.post('http://localhost:3000/api/register',formData)//201 status code msg
        .then((res)=>{
            alert(res.data.msg)
            window.location.href="/";
        })
    }
    return (
        <React.Fragment>
            <Header />


            <section class="login py-5 border-top-1">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-8 align-item-center">
                            <div class="border">
                                <h3 class="bg-gray p-4">Login Now</h3>
                                <form action="#">
                                    <fieldset class="p-4">
                                        <input type="text" placeholder="Name" class="border p-3 w-100 my-2" value={name} onChange={(e)=> setName(e.target.value)} />
                                        <input type="text" placeholder="email" class="border p-3 w-100 my-2" value={email} onChange={(e)=> setEmail(e.target.value)} />
                                        <input type="password" placeholder="Password" class="border p-3 w-100 my-2" value={password} onChange={(e)=> setPassword(e.target.value)} />

                                        <button type="button" class="d-block py-3 px-5 bg-primary text-white border-0 rounded font-weight-bold mt-3 mx-auto" onClick={()=>handleClick()}>Register</button>
                                        <div class="text-center">
                                        <a class="mt-3 d-inline-block text-primary" href="/">Login</a>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Logo/>
            <Bottom/>
        </React.Fragment>
    )
}

export default Register;