import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import Home from './components/Home';
import Dashboard from './components/Dashboard/Dashboard';
// import AuthDetails from "./components/AuthDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
