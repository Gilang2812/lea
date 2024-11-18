/** @format */;
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
 
function App() {
  return (
   
  <Router>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/forgot" element={<ForgotPassword />} /> 
    </Routes>
  </Router>
  );
}

export default App;