import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Home from './Components/Home'
import AddItem from './Components/AddItem'
import ItemInventory from './Components/ItemInventory'
import Store from './Components/Store'

function NavBar(){
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Inventory Management System</Link>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              
              <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Inventory</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to='/inventory'>Product Listing</Link></li>
                  <li><Link className="dropdown-item" to='/addItem'>Add New</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                 <Link className="nav-link" aria-current="page" to="/store">Store</Link>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </>
  )
}

function App() {
  return (
    <div className="App">
      {/* NavBar */}
      <Router>
        <NavBar/>
      
        <Routes>
            <Route path="/inventory" element={<ItemInventory/>} />
            <Route path="/store" element={<Store/>} />
            <Route path = "/addItem" element = {<AddItem/>} />
            <Route exact path = "" element = {<Home/>} />
          </Routes>
          
        </Router>
    </div>
  );
}

export default App;
