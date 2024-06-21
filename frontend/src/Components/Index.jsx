import React from "react"
import Navbar from "./Navbar"

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Patient_login from "./Pages/Patient_login"
import Patient_registration from "./Pages/Patient_registration"

import Doctor_registration from "./Pages/Doctor_registration"
import Doctor_signin from "./Pages/Doctor_signin"
import Patient_dashboard from "./Pages/Patient_dashboard"
import Doctor_dashboard from "./Pages/Doctor_dashboard"


export default function Index() {
  return (
 <>
    <BrowserRouter>
         <Routes>
               <Route path="/" element={<Navbar />}>
                    <Route path="/" element={<Patient_login/>}/>
                    <Route path="/register" element={<Patient_registration/>}/>
                    <Route path="/doc-login" element={<Doctor_signin/>}/>
                    <Route path="/doc-register" element={<Doctor_registration/>}/>
               </Route> 

               <Route path="/patient-dashboard" element={<Patient_dashboard/>}/>
               <Route path="/doctor-dashboard" element={<Doctor_dashboard />}/>
         </Routes>
    </BrowserRouter>
 </>
  )
}