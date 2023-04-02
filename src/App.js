import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import { useUserState } from "./store/store";

function App() {

  const [checking, setChecking] = useState(true)
  const { isLoggedIn, setIsLoggedIn } = useUserState()

  useEffect(() => {
    const token = localStorage.getItem("jwt")
    if (token) setIsLoggedIn()
    setChecking(prev => false)
  }, [])

  if (checking) {  
    return (
      <div className="flex justify-center items-center">
        <div className="lds-heart"><div></div></div>
      </div>
      ) 
  }

  return (
    <div>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Dashboard /> : <LandingPage />} />
          <Route path="/medical-tests" element={<Dashboard />} />
          <Route path="/doctors" element={!isLoggedIn ? <Navigate replace to="/" /> : <Dashboard />} />
          <Route path="/blood-bank" element={!isLoggedIn ? <Navigate replace to="/" /> : <Dashboard />} />
          <Route path="/add-appointment" element={!isLoggedIn ? <Navigate replace to="/" /> : <Dashboard />} />
          <Route path="/login" element={isLoggedIn ? <Navigate replace to="/" /> : <LoginPage />} />
          <Route path="/signup" element={isLoggedIn ? <Navigate replace to="/" /> : <SignupPage />} />
        </Routes>
    </div>
  )
}

export default App;

