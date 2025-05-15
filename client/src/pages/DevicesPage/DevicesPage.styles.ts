// client/src/pages/DevicesPage/DevicesPage.styles.ts
import { SxProps, Theme } from "@mui/material";

export const headerContainerStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  mb: 2,
};

export const titleStyles: SxProps<Theme> = {
  fontWeight: 600,
};

export const addButtonStyles: SxProps<Theme> = {
  textTransform: "none",
  fontWeight: 500,
  fontSize: "14px",
  paddingX: 2,
  paddingY: 1,
};
