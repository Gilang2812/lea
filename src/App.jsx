/** @format */;
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
 
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import SuratMasuk from "./pages/SuratMasuk";
import DetailSuratMasuk from "./pages/DetailSuratMasuk";
 
function App() {
  return (
   
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} /> 
      <Route path="/forgot" element={<ForgotPassword />} /> 
      <Route path="/surat" element={<SuratMasuk />} /> 
      <Route path="/surat/:id" element={<DetailSuratMasuk />} /> 

    </Routes>
  </Router>
  );
}

export default App;