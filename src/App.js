import './App.css';
import Login from './component/Login/Login';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes >
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes >
  </Router>
  );
}

export default App;
