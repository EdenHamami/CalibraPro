// client/src/pages/LoginPage/LoginPage.tsx
import { useState } from "react";
import { TextField, Button, Typography, Container, Box, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../slices/authSlice";
import { AppDispatch } from "../../store/store";
import { loginPageStyles } from "./LoginPage.styles";
import { pageContainerStyles } from "../../styles/globalStyles";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [serverError, setServerError] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    try {
      await dispatch(login(credentials)).unwrap();
      navigate("/dashboard");
    } catch (err: any) {
      console.error("Login failed:", err);
      setServerError(err || "Login failed.");
    }
  };

  return (
    <Box sx={pageContainerStyles}>
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={loginPageStyles.submitButton}
            >
              Login
            </Button>
          </form>

          <Typography sx={loginPageStyles.switchText}>
            Don't have an account?
            <Button onClick={() => navigate("/register")} sx={loginPageStyles.switchButton}>
              Sign up
            </Button>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
