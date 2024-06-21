import React from 'react';
import Index from './Components/Index';
import 'bootstrap/dist/css/bootstrap.min.css';



// import Nav from './Axios tutorial/Nav';

// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Signup from './Axios tutorial/Signup';
// import PrivateComponent from './Axios tutorial/PrivateComponent';

function App() {
return(
     <>
     {/* <Registration /> */}
         <Index />

{/* <BrowserRouter>
<Nav />

       <Routes>
        <Route element={<PrivateComponent />}>
            <Route path='/' element={<h1>Product component</h1>}/>
            <Route path='/add' element={<h1>Add Product component</h1>}/>
            <Route path='/update' element={<h1>Update Product component</h1>}/>
            <Route path='/logout' element={<h1>logout Product component</h1>}/>
            <Route path='/profile' element={<h1>profile Product component</h1>}/>
        </Route>

            <Route path='/signup' element={<Signup/>}/>
       </Routes>
</BrowserRouter> */}
        
    </>
  );
}

export default App;
