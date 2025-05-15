// client/src/pages/HomePage/HomePage.tsx
import { Card, CardContent, Typography, Button, Box, Container, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  cardStyles,
  containerStyles,
  buttonStyles,
  linkTextStyles,
  linkButtonStyles,
  outerContainerStyles,
} from "./HomePage.styles";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={outerContainerStyles}>
      <Box sx={containerStyles}>
        <Card sx={cardStyles}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              Welcome to
            </Typography>
            <Typography variant="h3" fontWeight="bold" color="primary">
              CalibraPro
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Easily manage, track, and add calibration devices and reports.
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                sx={buttonStyles}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Typography sx={linkTextStyles}>
                Don't have an account?{" "}
                <Link
                  component="button"
                  sx={linkButtonStyles}
                  onClick={() => navigate("/register")}
                  underline="hover"
                >
                  Create Account
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default HomePage;
