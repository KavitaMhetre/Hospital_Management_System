import React, { useEffect, useState } from "react"
import Header from "../Header"
import axios from "axios";
import Logo from "../Logo"
import Bottom from "../Bottom"

const Dashboard = () => {
    const [patient, setpatient] = useState('')
    const [diseases, setdiseases] = useState([]);
    const [token, setToken] = useState('');
    function fetchdoctors(tokens) {
        axios.get("http://localhost:3000/api/get-diseases", { headers: { "Authorization": `Bearer ${tokens}` } })
            .then((res) => {
                setdiseases(res.data.data);
                console.log(res.data.data);
            })
    }
    useEffect(() => {
        const info = JSON.parse(localStorage.getItem('patient'));
        const infot = localStorage.getItem('token');
        setpatient(info);
        // setToken(token);
        fetchdoctors(infot);
    }, [])
    return (
        <React.Fragment>
            <Header />
            <section class="dashboard section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1 col-lg-4 offset-lg-0">
                            <div class="sidebar">
                                <div class="widget patient-dashboard-profile">
                                    <h2>Profile</h2>
                                    <h5 class="text-center">{patient.name}</h5>
                                    <p>{patient.email}</p>
                                    {/* <a href="patient-profile.html" class="btn btn-main-sm">Edit Profile</a> */}
                                </div>
                                <div class="widget patient-dashboard-menu">
                                    <ul>
                                        <li class="active"><a href="/patient-dashboard"><i class="fa fa-bookmark-o"></i> My diseases</a></li>
                                        <li><a href="/doctor-list"><i class="fa fa-patient"></i> doctors</a></li>

                                    </ul>
                                </div>


                                <div class="modal fade" id="deleteaccount" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header border-bottom-0">
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body text-center">
                                                <img src="/images/account/Account1.png" class="img-fluid mb-2" alt="" />
                                                <h6 class="py-2">Are you sure you want to delete your account?</h6>
                                                <p>Do you really want to delete these records? This process cannot be undone.</p>
                                                <textarea name="message" id="" cols="40" rows="4" class="w-100 rounded"></textarea>
                                            </div>
                                            <div class="modal-footer border-top-0 mb-3 mx-5 justify-content-lg-between justify-content-center">
                                                <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
                                                <button type="button" class="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-0">
                            <div class="widget dashboard-container my-adslist">

                                <div class="category-search-filter">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <strong>My diseases</strong>

                                        </div>
                                        <div class="col-md-6">
                                            <div class="view">
                                                <strong>Add</strong>
                                                <ul class="list-inline view-switcher">
                                                    <li class="list-inline-item">
                                                        <a href="/add-disease"><i class="fa fa-plus"></i></a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {diseases.map((obj) => {
                                    return (<div class="ad-listing-list mt-20">
                                        <div class="row p-lg-3 p-sm-5 p-4">
                                            <div class="col-lg-4 align-self-center">
                                                <a href="#">
                                                    <img src="/images/gallery/g3.jpg" class="img-fluid" alt="" />
                                                </a>
                                            </div>
                                            <div class="col-lg-8">
                                                <div class="row">
                                                    <div class="col-lg-12 col-md-10">
                                                        <div class="ad-listing-content">
                                                            <div>
                                                                <a href="#" class="font-weight-bold">{obj.ename}</a>
                                                            </div>
                                                            <ul class="list-inline mt-2 mb-3">
                                                                <li class="list-inline-item"><a href="#"> <i class="fa fa-folder-open-o"></i>
                                                                    {obj.etype}</a></li>
                                                                <li class="list-inline-item"><a href="#"> <i class="fa fa-patient"></i>
                                                                    {obj.vname} - {obj.vmob}</a></li>

                                                            </ul>
                                                            <p class="pr-5">{obj.description}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                })
                                }
                                {/* <table class="table table-responsive product-dashboard-table">
                                    <thead>
                                        <tr>
                                            <th>doctor Name</th>
                                            <th class="text-center">Mobile</th>
                                            <th class="text-center">Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                                <td class="product-details">
                                                    <p>{obj.vname}</p></td>
                                                <td class="product-category">
                                                    <p>{obj.vmob}</p>
                                                </td>
                                                <td class="product-category">
                                                    <p>{obj.vadd}</p>
                                                </td>
                                            </tr>

                                    </tbody>
                                </table> */}

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

export default Dashboard;