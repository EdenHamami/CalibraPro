// client/src/pages/DevicesPage/DevicesPage.tsx
import React, { useEffect, useState } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { fetchDevicesByUser } from "../../api/devices";
import { useNavigate } from "react-router-dom";
import DeviceTable from "./DeviceTable/DeviceTable";
import { pageContainerStyles } from "../../styles/globalStyles";
import {
  headerContainerStyles,
  titleStyles,
  addButtonStyles,
} from "./DevicesPage.styles";

const DevicesPage: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadDevices = async () => {
      if (!user || !user.token) {
        console.warn("No user or token yet – skipping fetch");
        return;
      }

      try {
        const data = await fetchDevicesByUser(user.user_id, user.token);
        setDevices(data);
      } catch (error) {
        console.error("❌ Failed to fetch devices:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDevices();
  }, [user?.user_id, user?.token]);

  return (
    <Box sx={pageContainerStyles}>
      <Box sx={headerContainerStyles}>
        <Typography variant="h5" sx={titleStyles}>
          Choose a Device
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/add-device")}
          sx={addButtonStyles}
        >
          Add New Device +
        </Button>
      </Box>

      {loading ? <CircularProgress /> : <DeviceTable devices={devices} />}
    </Box>
  );
};

export default DevicesPage;
