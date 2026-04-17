import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function AdminLogin() {
  const base_url = process.env.REACT_APP_BASE_URL || "http://127.0.0.1:8000";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit =  async (e) => {
    e.preventDefault();
try {
const response = await axios.post(`${base_url}/api/admin`, {
  email,
  password
});
if (response.status === 200) {
  // console.log(response.data);
  const token = response.data.token;
  localStorage.setItem("token", token); 
  localStorage.setItem("adminAuth", "true");
  navigate("/admin");
} else {
  alert("Invalid credentials");
}
}catch (error) {
  console.error("Login error:", error);
  alert(
    error?.response?.data?.error ||
    "Something went wrong"
  );
}
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}