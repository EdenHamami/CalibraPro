// client/src/pages/LoginPage/LoginPage.styles.ts
import { SxProps, Theme } from "@mui/material/styles";

export const loginPageStyles: Record<string, SxProps<Theme>> = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  box: {
    width: "100%",
    padding: 4,
    boxShadow: 3,
    borderRadius: 3,
    textAlign: "center",
    backgroundColor: "white",
  },
  submitButton: {
    mt: 2,
  },
  switchText: {
    mt: 2,
    fontSize: "14px",
  },
  switchButton: {
    textTransform: "none",
    fontWeight: "bold",
  },
};
