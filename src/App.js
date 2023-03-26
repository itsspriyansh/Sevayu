// import { Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

function App() {
  return (
    <div>
      <Dashboard />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
