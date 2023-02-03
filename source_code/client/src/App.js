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
    </div>
  );
}

export default App;
