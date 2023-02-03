import logo from './logo.png';
import image from './profile.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
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
              <h3>Mahesh</h3>
              Creating website
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
