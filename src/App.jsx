/** @format */;
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
 
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
 
function App() {
  return (
   
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} /> 
      <Route path="/forgot" element={<ForgotPassword />} /> 
    </Routes>
  </Router>
  );
}

export default App;