// client/src/pages/DashboardHome/DashboardHomePage.styles.ts
import { SxProps, Theme } from "@mui/material";

export const pageContentStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  padding: 6,
  height: "100%",
};

export const welcomeCardStyles: SxProps<Theme> = {
  padding: 6,
  borderRadius: 4,
  boxShadow: 4,
  backgroundColor: "#fff",
  minWidth: { xs: "90%", md: 520 },
  textAlign: "center",
};

export const sideButtonsContainerStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 3.5,
  width: { xs: "90%", md: 300 },
};

export const actionButtonStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  textTransform: "none",
  fontSize: "1.2rem",
  padding: "16px 24px",
  backgroundColor: "#e3f2fd",
  color: "primary.main",
  borderRadius: 2.5,
  boxShadow: 3,
  "& svg": {
    fontSize: "1.7rem",
  },
  "&:hover": {
    backgroundColor: "#bbdefb",
  },
};

export const iconBoxStyles: SxProps<Theme> = {
  marginRight: 2,
  display: "flex",
  alignItems: "center",
};
