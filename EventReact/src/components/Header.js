import { useEffect, useState } from "react";


const Header = () => {
    const [user_token,setUserToken] = useState('');
    useEffect(()=>{
        const temp = localStorage.getItem('token');
        if(temp){
            setUserToken(temp);
        }
    },[])
    return (
        <section >
            <div /* class="container" */>
                <div class="row">
                    <div class="col-md-12">
                        <nav class="navbar navbar-expand-lg navbar-light navigation py-2 my-1">
                            <a class="navbar-brand" href="/">
                                
                                    <h2>Hospital Management System</h2>
                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto main-nav ">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/about">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/Facility">Facility</a>
                                    </li>

                                </ul>
                                <ul class="navbar-nav ml-auto mt-10">
                                    <li class="nav-item">
                                        {!user_token ? <a class="nav-link login-button" href="/">Login</a>
                                            :
                                            <a class="nav-link login-button" href="/Logout">Logout</a>
                                        }
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;