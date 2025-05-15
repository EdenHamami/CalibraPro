import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";

import theme from "./styles/theme";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DevicesPage from "./pages/DevicesPage/DevicesPage";
import { setUserFromStorage } from "./slices/authSlice";
import DashboardHomePage from "./pages/DashboardHome/DashboardHomePage";
import AddDevicePage from "./pages/AddDevicePage/AddDevicePage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userJson = localStorage.getItem("user");
    if (userJson) {
      const user = JSON.parse(userJson);
      dispatch(setUserFromStorage({ user }));
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Box>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/my-devices" element={<DevicesPage />} />
            <Route path="/dashboard" element={<DashboardHomePage />} />
            <Route path="/add-device" element={<AddDevicePage />} />


          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
