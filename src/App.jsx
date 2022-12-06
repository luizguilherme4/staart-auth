import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { UserProfile } from "./pages/UserProfile";
import { UpdateProfile } from "./pages/UpdateProfile";
import { ForgotPassword } from "./pages/ForgotPassword";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div><h1>Rota não encontrada</h1></div>}></Route>
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
