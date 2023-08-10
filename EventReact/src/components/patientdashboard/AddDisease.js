import React, { useEffect, useState } from "react"
import Header from "../Header"
import axios from "axios";
import Logo from "../Logo"
import Bottom from "../Bottom"

const Adddisease = () => {
    const [patient, setpatient] = useState('')
    const [doctors, setDoctors] = useState([]);
    const [token, setToken] = useState('');
    const [enm,setEnm] = useState('')
    const [etype,setEtype] = useState('')
    const [price,setPrice] = useState('')
    const [desc,setDesc] = useState('')
    const [vcount,setVCount] = useState('')
    const [eadd,setEAdd] = useState('')
    

     function fetchdoctors(tokens) {
        setToken(tokens)
        axios.get("http://localhost:3000/api/get-doctors", { headers: { "Authorization": `Bearer ${tokens}` } })
            .then((res) => {
                setdoctors(res.data.data);
                console.log(res.data.data);
            })
    } 
    function handleClick(){
        console.log(token);
        const diseaseData={
            ename:enm,
            etype:etype,
            price:price,
            desc:desc,
            cnt:vcount,
            add:eadd,
        }
        axios.post("http://localhost:3000/api/add-disease",diseaseData, { headers: { "Authorization": `Bearer ${token}` } })
        .then((res)=>{
            alert(res.data.msg);
            window.location.href="/patient-dashboard";
        })
    }
    useEffect(() => {
        const info = JSON.parse(localStorage.getItem('patient'));
        const infot = localStorage.getItem('token');
        setpatient(info);
        setToken(infot);
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
                                            <strong>Add disease</strong>

                                        </div>
                                        
                                    </div>
                                </div>

                                <div class="border">
                                    
                                    <form action="#">
                                        <fieldset class="p-4">
                                            <input type="text" placeholder="disease Name" class="border p-3 w-100 my-2" value={enm} onChange={(e) => setEnm(e.target.value)} />
                                            <select value={etype} onChange={(e)=>setEtype(e.target.value)} class="border p-3 w-100 my-2">
                                                <option value="Wedding">Wedding</option>
                                                <option value="meeting">Meeting</option>
                                                <option value="Ceremony">Ceremony</option>
                                            </select>
                                            <input type="text" placeholder="disease Budget" class="border p-3 w-100 my-2" value={price} onChange={(e) => setPrice(e.target.value)} />
                                            <textarea class="border p-3 w-100 my-2" placeholder="Enter Description" value={desc} onChange={(e)=>{setDesc(e.target.value)}}></textarea>
                                            <input type="text" placeholder="disease Visitor count" class="border p-3 w-100 my-2" value={vcount} onChange={(e) => setVCount(e.target.value)} />
                                            <textarea class="border p-3 w-100 my-2" placeholder="Enter disease Address" value={eadd} onChange={(e)=>{setEAdd(e.target.value)}}></textarea>
                                            <button type="button" class="d-block py-3 px-5 bg-primary text-white border-0 rounded font-weight-bold mt-3" onClick={() => handleClick()} >Add</button>

                                        </fieldset>
                                    </form>
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

export default Adddisease;