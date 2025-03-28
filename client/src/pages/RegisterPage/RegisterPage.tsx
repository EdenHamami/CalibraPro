import { useState } from "react";
import { TextField, Button, Typography, Container, Box, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../slices/authSlice";
import { AppDispatch } from "../../store/store";
import { registerPageStyles } from "./RegisterPage.styles";

const RegisterPage = () => {
  const [formData, setFormData] = useState({ 
    email: "", 
    password: "", 
    confirmPassword: "", 
    display_name: "" 
  });

  const [passwordError, setPasswordError] = useState(""); 
  const [serverError, setServerError] = useState(""); 
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // פונקציה לשינוי נתוני הטופס
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "password") {
      validatePassword(e.target.value);
    }
  };

  // בדיקת תקינות סיסמה
  const validatePassword = (password: string) => {
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    } else if (!/\d/.test(password)) {
      setPasswordError("Password must contain at least one number.");
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }
  
    if (passwordError) return;
  
    try {
      console.log("📡 Attempting to register...");
  
      const userData = {
        email: formData.email,
        password: formData.password,
        display_name: formData.display_name,
      };
  
      await dispatch(register(userData)).unwrap();
      console.log("✅ Registration successful!");
      navigate("/");
    } catch (error: any) {
      console.error("❌ Registration failed:", error);
      setServerError(error || "Registration failed.");
    }
  };
  

  return (
    <Container maxWidth="sm" sx={registerPageStyles.container}>
      <Box sx={registerPageStyles.box}>
        <Typography variant="h4" fontWeight="bold">Sign Up</Typography>
        
        {/* הודעת שגיאה מהשרת */}
        {serverError && <Alert severity="error" sx={{ whiteSpace: "pre-line" }}>{serverError}</Alert>}
        
        <form onSubmit={handleSubmit}>
          <TextField 
            label="Email" 
            name="email"
            type="email" 
            fullWidth 
            margin="normal" 
            onChange={handleChange} 
            required 
          />
          <TextField 
            label="Display Name" 
            name="display_name"
            fullWidth 
            margin="normal" 
            onChange={handleChange} 
          />
          <TextField 
            label="Password" 
            name="password"
            type="password" 
            fullWidth 
            margin="normal" 
            onChange={handleChange} 
            required 
            error={!!passwordError}
            helperText={passwordError}
          />
          <TextField 
            label="Confirm Password" 
            name="confirmPassword"
            type="password" 
            fullWidth 
            margin="normal" 
            onChange={handleChange} 
            required 
            error={formData.password !== formData.confirmPassword && !!formData.confirmPassword}
            helperText={formData.password !== formData.confirmPassword && !!formData.confirmPassword ? "Passwords do not match." : ""}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} disabled={!!passwordError}>
            Register
          </Button>
        </form>
        <Typography sx={registerPageStyles.switchText}>
          Already have an account? 
          <Button onClick={() => navigate("/login")} sx={registerPageStyles.switchButton}>Login</Button>
        </Typography>
      </Box>
    </Container>
  );
};

export default RegisterPage;
