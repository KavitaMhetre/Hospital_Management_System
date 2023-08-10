import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import Logo from "./Logo"
import Bottom from "./Bottom"

const Home = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    function handleClick(){
        const formData = {
            
            email:email,
            password:password
        }
        axios.post('http://localhost:3000/api/login',formData)
        .then((res)=>{
            alert(res.data.msg)
            if(res.data.msg === "Logged in!"){
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('patienttype','patient');
                localStorage.setItem('patient',JSON.stringify(res.data.patient));
                window.location.href="/patient-dashboard";
            }
            
        })
    }
    useEffect(()=>{
        var utype = localStorage.getItem('patienttype');
        if(utype){
            // console.log(utype)
            if(utype === "doctor"){
                window.location.href="/doctor-dashboard";
            }
            else{
                window.location.href="/patient-dashboard";
            }
        }
    })
    return (
        <React.Fragment>
            <Header />
            <section class="hero-area bg-1 text-center overly">

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">

                            <div class="content-block">
                                <h1>Avanti Hospital</h1>
                                <p>Join the millions who get from each other <br/> everyday in local communities around the world for better service and treatments</p>


                            </div>


                        </div>
                    </div>
                </div>

            </section>

            <section class="login py-5 border-top-1">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-8 align-item-center">
                            <div class="border" >
                                <h3 class="bg-gray mt-2 p-3 ">Login Now</h3>
                                <form action="#">
                                    <fieldset class="p-4">
                                        <input type="text" placeholder="email" class="border p-3 w-100 my-1" value={email} onChange={(e)=> setEmail(e.target.value)} />
                                        <input type="password" placeholder="Password" class="border p-3 w-100 my-2" value={password} onChange={(e)=> setPassword(e.target.value)} />
                                        
                                        <button type="button" class="d-block py-3 px-5 bg-primary text-white border-0 rounded font-weight-bold mt-3 mx-auto" onClick={()=>handleClick()} >Log in</button>
                                        <div class="text-center">
                                        <a class="mt-3 d-inline-block text-primary " href="/register">Register Now</a><br/>
                                        <a class="mt-3 d-inline-block text-primary " href="/DLogin">doctor</a>
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

export default Home;