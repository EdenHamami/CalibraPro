import { Card, CardContent, Typography, Button, Box, Container } from "@mui/material";
import { cardStyles, containerStyles, buttonStyles } from "./HomePage.styles";

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ height: { xs: "auto", sm: "calc(100vh - 64px)" }, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box sx={containerStyles}>
        <Card sx={cardStyles}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              Welcome To
            </Typography>
            <Typography variant="h3" fontWeight="bold" color="primary">
              CalibraPro
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Easily manage, track, and add calibration devices and reports
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Button variant="contained" color="primary" sx={buttonStyles}>
                Get started
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default HomePage;
