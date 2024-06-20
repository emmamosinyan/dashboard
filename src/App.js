import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import NoPage from "./pages/NoPage";
import EditUser from "./pages/EditUser";
import { AuthContextProvider } from "./context/authContext";

export default function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:_id" element={<EditUser />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}
