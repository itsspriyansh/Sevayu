// import { Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

function App() {
  const login = true;

  return (
    <div>
      {
        login ? (
        <Routes>
          <Route path="/appointments" element={<Dashboard />} />
          <Route path="/medical-tests" element={<Dashboard />} />
          <Route path="/doctors" element={<Dashboard />} />
          <Route path="/blood-bank" element={<Dashboard />} />
          <Route path="/add-appointment" element={<Dashboard />} />
        </Routes>
        ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        )
      }
    </div>
  );
}

export default App;
