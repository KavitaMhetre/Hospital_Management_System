import React from "react"
import Logo from "./Logo"
import Bottom from "./Bottom"
import Header from "./Header"
const About = () => {
    return (
        <React.Fragment>
            <Header />
            <section class="page-title">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2 text-center">
                            <h3>About Us</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="about-img">
                                <img src="/images/about/about1.jpg" class="img-fluid w-100 rounded" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6 pt-5 pt-lg-0">
                            <div class="about-content">
                                <h3 class="font-weight-bold">Introduction</h3>
                                <p>Founded by award-winning doctor Kavita Mhetre in 2018, Avanti Hospital is one of the most popular across Pune and neighboring areas.</p>
                                <h3 class="font-weight-bold">How we can help</h3>
                                <p>Our hospital management system that empowers patients to choose their preferred doctors and 
                                    enables secure login and registration for patients and doctors. 
                                    Doctors can efficiently manage patients through a clear list, while patients gain access to a comprehensive list of diseases. 
                                    This system enhances patient choice, care, and medical information accessibility.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="mb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="heading text-center text-capitalize font-weight-bold my-5 py-2 bg-white">
                                <h2>our team</h2>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class1="card-img-top" src="/images/team/team1.jpg" class2="img-fluid w-100" alt="Card image cap"/>
                                    <div class="card-body bg-gray text-center">
                                        <h5 class="card-title">Abhilash Kharat</h5>
                                        <p class="card-text">Physician</p>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class1="card-img-top" src="/images/team/team2.jpg" class2="img-fluid w-100" alt="Card image cap"/>
                                    <div class="card-body bg-gray text-center">
                                        <h5 class="card-title">Kavita Mhetre</h5>
                                        <p class="card-text">Heart Surgeon</p>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class1="card-img-top" src="/images/team/team3.jpg" class2="img-fluid w-100" alt="Card image cap"/>
                                    <div class="card-body bg-gray text-center">
                                        <h5 class="card-title">Parth Dhulam</h5>
                                        <p class="card-text">Orthopedic</p>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="card my-3 my-lg-0">
                                <img class1="card-img-top" src="/images/team/team4.jpg" class2="img-fluid w-100" alt="Card image cap"/>
                                    <div class="card-body bg-gray text-center">
                                        <h5 class="card-title">Priyanka Dilpak</h5>
                                        <p class="card-text">Psychaiatrist</p>
                                    </div>
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

export default About;