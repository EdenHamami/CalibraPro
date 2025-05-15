// client/src/pages/AddDevicePage/AddDevicePage.styles.ts
import { SxProps, Theme } from "@mui/material/styles";

export const addDeviceStyles: Record<string, SxProps<Theme> | React.CSSProperties> = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  box: {
    width: "100%",
    padding: 4,
    borderRadius: 3,
    backgroundColor: "white",
    boxShadow: 3,
    textAlign: "center",
  },
  title: {
    fontSize: "1.75rem",
    fontWeight: "bold",
    marginBottom: 3,
  },
  alert: {
    marginBottom: 2,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  submitButton: {
    marginTop: 2,
  },
  successBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  },
  successAlert: {
    width: "100%",
    mb: 2,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 1.5,
    width: "100%",
    maxWidth: 300,
    marginTop: 1,
  },
  addAnotherLink: {
    marginTop: 2,
    fontSize: "0.9rem",
    color: "primary.main",
    fontWeight: 500,
  },
};
