import logo from './logo.png';
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
    </div>
  );
}

export default App;
