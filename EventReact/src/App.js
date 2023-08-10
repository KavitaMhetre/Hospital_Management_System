import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Register from './components/Register';
import About from './components/About';
import RegisterDoctor from './components/RegisterDoctor';
import Dashboard from './components/patientdashboard/Dashboard';
import Logout from './components/Logout';
import DoctorList from './components/patientdashboard/DoctorList';
import AddDisease from './components/patientdashboard/AddDisease';
import VDashboard from './components/doctordashboard/VDashboard';
import DLogin from './components/DLogin';
import VDiseases from './components/doctordashboard/VDisease';
import Facility from './components/Facility';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/RegisterDoctor' element={<RegisterDoctor/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/Facility' element={<Facility />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/DoctorList' element={<DoctorList />} />
      <Route path='/AddDisease' element={<AddDisease />} />
      <Route path='/DLogin' element={<DLogin />} />
      <Route path='/VDashboard' element={<VDashboard />} />
      <Route path='/VDiseases' element={<VDiseases />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
