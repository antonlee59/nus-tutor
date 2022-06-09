// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Login from "./components/Login/Login";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="landingpage" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
