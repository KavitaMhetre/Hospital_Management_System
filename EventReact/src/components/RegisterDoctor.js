import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import Logo from "./Logo"
import Bottom from "./Bottom"

const RegisterDoctor = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [address,SetAddress] = useState('');
    const [mob,setMob] = useState('');
    const [password,setPassword] = useState('');

    function handleClick(){
        const formData = {
            name:name,
            email:email,
            vmob:mob,
            vadd:address,
            password:password
        }
        
        axios.post('http://localhost:3000/api/register-doctor',formData)
        .then((res)=>{
            console.log(res);
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
                                <h3 class="bg-gray p-4">Doctor Register Now</h3>
                                <form action="#">
                                    <fieldset class="p-4">
                                        <input type="text" placeholder="Name" class="border p-3 w-100 my-2" value={name} onChange={(e)=> setName(e.target.value)} />
                                        <input type="text" placeholder="email" class="border p-3 w-100 my-2" value={email} onChange={(e)=> setEmail(e.target.value)} />
                                        <input type="text" placeholder="Mobile" class="border p-3 w-100 my-2" value={mob} onChange={(e)=> setMob(e.target.value)} />
                                        <textarea class="border p-3 w-100 my-2" placeholder="Enter Address" value={address} onChange={(e)=>{SetAddress(e.target.value)}}></textarea>
                                        <input type="password" placeholder="Password" class="border p-3 w-100 my-2" value={password} onChange={(e)=> setPassword(e.target.value)} />

                                        <button type="button" class="d-block py-3 px-5 bg-primary text-white border-0 rounded font-weight-bold mt-3" onClick={()=>handleClick()}>Register</button>

                                        <a class="mt-3 d-inline-block text-primary" href="/DLogin">Login</a>
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

export default RegisterDoctor;