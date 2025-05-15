// client/src/pages/DashboardHome/DashboardHomePage.tsx
import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import {
  welcomeCardStyles,
  sideButtonsContainerStyles,
  actionButtonStyles,
  iconBoxStyles,
  pageContentStyles,
} from "./DashboardHomePage.styles";
import DevicesIcon from "@mui/icons-material/Devices";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useNavigate } from "react-router-dom";
import { pageContainerStyles } from "../../styles/globalStyles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const DashboardHomePage: React.FC = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);
  const username = user?.display_name || "User";

  return (
    <Box sx={pageContainerStyles}>
      <Box sx={pageContentStyles}>
        <Card sx={welcomeCardStyles}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Welcome back to
            </Typography>
            <Typography variant="h3" fontWeight="bold" color="primary">
              CalibraPro
            </Typography>
            <Typography variant="h6" mt={2}>
              {username} !
            </Typography>
            <Typography variant="body1" mt={2}>
              What would you like to do?
            </Typography>
          </CardContent>
        </Card>

        <Box sx={sideButtonsContainerStyles}>
          <Button
            variant="contained"
            sx={actionButtonStyles}
            onClick={() => navigate("/my-devices")}
          >
            <Box sx={iconBoxStyles}>
              <DevicesIcon />
            </Box>
            My Devices
          </Button>

          <Button
            variant="contained"
            sx={actionButtonStyles}
            onClick={() => navigate("/add-report")}
          >
            <Box sx={iconBoxStyles}>
              <NoteAddIcon />
            </Box>
            Add Report
          </Button>

          <Button
            variant="contained"
            sx={actionButtonStyles}
            onClick={() => navigate("/add-device")}
          >
            <Box sx={iconBoxStyles}>
              <AddBoxIcon />
            </Box>
            Add New Device
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardHomePage;
