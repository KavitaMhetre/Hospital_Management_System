import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import Logo from "./Logo"
import Bottom from "./Bottom"

const DLogin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    function handleClick(){
        const formData = {
            
            email:email,
            password:password
        }
        axios.post('http://localhost:3000/api/login-doctor',formData)
        .then((res)=>{
            alert(res.data.msg)
            if(res.data.msg === "Logged in!"){
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('patienttype','doctor');
                localStorage.setItem('patient',JSON.stringify(res.data.patient));
                window.location.href="/doctor-dashboard";
            }
            
        })
    }
    return (
        <React.Fragment>
            <Header />
            <section class="hero-area bg-1 text-center overly">

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">

                            <div class="content-block">
                                <h1>Event Planning</h1>
                                <p>Join the millions who get from each other <br/> everyday in local communities around the world for better service and contacts</p>


                            </div>


                        </div>
                    </div>
                </div>

            </section>

            <section class="login py-5 border-top-1">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-8 align-item-center">
                            <div class="border">
                                <h3 class="bg-gray p-4">Doctor login Now</h3>
                                <form action="#">
                                    <fieldset class="p-4">
                                        <input type="text" placeholder="email" class="border p-3 w-100 my-2" value={email} onChange={(e)=> setEmail(e.target.value)} />
                                        <input type="password" placeholder="Password" class="border p-3 w-100 my-2" value={password} onChange={(e)=> setPassword(e.target.value)} />
                                        
                                        <button type="button" class="d-block py-3 px-5 bg-primary text-white border-0 rounded font-weight-bold mt-3 mx-auto" onClick={()=>handleClick()} >Log in</button>
                                        
                                        <div class="text-center">
                                        <a class="mt-3 d-inline-block text-primary" href="/RegisterDoctor">Register</a>
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

export default DLogin;