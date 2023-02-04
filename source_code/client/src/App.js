import logo from './logo.png';
import image from './profile.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {useState} from 'react'

function Editable(props) {
  return (
    <span>
      {
        props.showInputElement ? (
          <input 
            type="text"
            value={props.value}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            autoFocus
          />
        ) : (
          <span 
            onDoubleClick={props.handleDoubleClick}
            style={{ 
              display: "inline-block", 
              height: "25px", 
              minWidth: "300px", 
            }}a
          >
            {props.value}
          </span>
        )
      }
    </span>
  );
}

function App() {


  const [Name, setName] = useState("James Smith");
  const [description , setDescription] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
  
  const [showInputElement, setShowInputElement] = useState(false);
  const [showInputElement2, setShowInputElement2] = useState(false);


  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="25" height="25" className="d-inline-block align-text-top"/>
            Media library
          </a>
        </div>
      </nav>

      <div className="container-fluid ">
          <div className="row">

            <div className="col col-md-auto ">
            <img src={image} width="300" height="300" className="d-inline-block align-text-top"/>
            </div>
            <div className="col p-10 g-4">
              <h3><Editable
            value={Name}
            handleChange={(e) => setName(e.target.value)}  
            handleDoubleClick={() => setShowInputElement(true)} 
            handleBlur={() => setShowInputElement(false)}         
            showInputElement={showInputElement}
          /></h3>
               <Editable
            value={description}
            handleChange={(f) => setDescription(f.target.value)}  
            handleDoubleClick={() => setShowInputElement2(true)} 
            handleBlur={() => setShowInputElement2(false)}         
            showInputElement={showInputElement2}
          />
            </div>
          </div>
      </div>
      <div className="p-2">
        <div className="row align-items-center p-2">
              <div className="col-lg-3">
                <label className="col-form-label">Enter First Number</label>
              </div>
              <div className="col-auto">
                <input type="number" name='num1' className="form-control" />
              </div>
        </div>
        <div className="row align-items-center p-2">
              <div className="col-lg-3">
                <label className="col-form-label">Enter Second Number</label>
              </div>
              <div className="col-auto">
                <input type="number" name='num2' className="form-control" />
              </div>
        </div>

        <button type="button" className="btn btn-primary" >Submit</button>
        
        <h3>Your Addition Result(from Server) is:</h3>
        <h3>Your Addition Result(from ReactJS) is: 0</h3>
      </div>
    </div>
  );
}

export default App;
