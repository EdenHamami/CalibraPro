import { useState } from "react";
import { TextField, Button, Typography, Container, Box, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../slices/authSlice"; 
import { AppDispatch } from "../../store/store";
import { loginPageStyles } from "./LoginPage.styles";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [serverError, setServerError] = useState(""); // 🔴 משתנה חדש לשמירת שגיאות השרת
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(""); // איפוס שגיאות לפני ניסיון חדש
    try {
      await dispatch(login(credentials)).unwrap();
      navigate("/");
    } catch (err: any) {
      console.error("❌ Login failed:", err);
      setServerError(err || "Login failed."); // הצגת הודעת השגיאה מהשרת
    }
  };

  return (
    <Container maxWidth="sm" sx={loginPageStyles.container}>
      <Box sx={loginPageStyles.box}>
        <Typography variant="h4" fontWeight="bold">Login</Typography>

        {serverError && <Alert severity="error">{serverError}</Alert>}

        <form onSubmit={handleSubmit}>
          <TextField 
            label="Email" 
            name="email"
            fullWidth 
            margin="normal" 
            onChange={handleChange} 
            required 
          />
          <TextField 
            label="Password" 
            name="password"
            type="password" 
            fullWidth 
            margin="normal" 
            onChange={handleChange} 
            required 
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>

        <Typography sx={loginPageStyles.switchText}>
          Don't have an account?  
          <Button onClick={() => navigate("/register")} sx={loginPageStyles.switchButton}>Sign up</Button>
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginPage;
