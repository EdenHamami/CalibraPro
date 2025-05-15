// client/src/pages/HomePage/HomePage.styles.ts
import { SxProps, Theme } from "@mui/material/styles";

export const outerContainerStyles: SxProps<Theme> = {
  height: { xs: "auto", sm: "calc(100vh - 64px)" },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const containerStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f8f8f8",
};

export const cardStyles: SxProps<Theme> = {
  maxWidth: { xs: "90%", sm: 500 },
  textAlign: "center",
  borderRadius: 3,
  boxShadow: 3,
  padding: 3,
  backgroundColor: "white",
};

export const buttonStyles: SxProps<Theme> = {
  fontSize: "1rem",
  padding: "10px 20px",
};

export const linkTextStyles: SxProps<Theme> = {
  mt: 2,
  textAlign: "center",
  fontSize: "0.875rem",
};

export const linkButtonStyles: SxProps<Theme> = {
  fontSize: "0.875rem",
  ml: 0.5,
  color: "primary.main",
  fontWeight: "medium",
  padding: 0,
  minWidth: 0,
  textTransform: "none",
};
