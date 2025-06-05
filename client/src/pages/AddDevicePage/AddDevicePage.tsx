// client/src/pages/AddDevicePage/AddDevicePage.tsx
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addDevice } from "../../api/devices";
import { pageContainerStyles } from "../../styles/globalStyles";
import { addDeviceStyles } from "./AddDevicePage.styles";

const AddDevicePage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    serial_number: "",
    device_name: "",
    device_features: "",
    model: null,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [createdDeviceId, setCreatedDeviceId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      serial_number: "",
      device_name: "",
      device_features: "",
      model: null,
    });
    setError("");
    setSuccess(false);
    setCreatedDeviceId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setCreatedDeviceId(null);

    if (!user || !user.token) {
      setError("You must be logged in to add a device.");
      return;
    }

    try {
      const newDevice = await addDevice(
        { ...formData, user: user.user_id },
        user.token
      );
      setCreatedDeviceId(newDevice.id);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Box sx={pageContainerStyles}>
      <Container maxWidth="sm" sx={addDeviceStyles.container}>
        <Box sx={addDeviceStyles.box}>
          <Typography sx={addDeviceStyles.title}>Add New Device</Typography>

          {error && (
            <Alert severity="error" sx={addDeviceStyles.alert}>
              {error}
            </Alert>
          )}

          {!success ? (
            <form onSubmit={handleSubmit} style={addDeviceStyles.form as any}>
              <TextField
                label="Serial Number"
                name="serial_number"
                fullWidth
                required
                value={formData.serial_number}
                onChange={handleChange}
              />
              <TextField
                label="Device Name"
                name="device_name"
                fullWidth
                value={formData.device_name}
                onChange={handleChange}
              />
              <TextField
                label="Device Features"
                name="device_features"
                fullWidth
                multiline
                minRows={3}
                value={formData.device_features}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={addDeviceStyles.submitButton}
              >
                Add Device
              </Button>
            </form>
          ) : (
            <Box sx={addDeviceStyles.successBox}>
              <Alert severity="success" sx={addDeviceStyles.successAlert}>
                Device added successfully!
              </Alert>

              <Box sx={addDeviceStyles.buttonGroup}>
                <Button
                  variant="outlined"
                  onClick={() => navigate("/my-devices")}
                >
                  View All Devices
                </Button>
                <Button
                  variant="contained"
                  onClick={() =>
                    createdDeviceId && navigate(`/devices/${createdDeviceId}`)
                  }
                >
                  Go to Device Page
                </Button>
              </Box>

              <Link
                component="button"
                underline="hover"
                onClick={resetForm}
                sx={addDeviceStyles.addAnotherLink}
              >
                + Add Another Device
              </Link>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default AddDevicePage;
