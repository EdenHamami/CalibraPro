import { SxProps, Theme } from "@mui/material/styles";

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
