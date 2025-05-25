import { Routes, Route } from "react-router-dom";
import Login from "./routes/login/Login";
import Dashboard from "./routes/login/Dashboard";
import Admin from "./routes/Admin/admin";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/administrador" element={<Admin />} />

    </Routes>
  );
}
