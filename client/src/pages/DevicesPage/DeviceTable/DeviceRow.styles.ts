// client/src/pages/DevicesPage/DeviceTable/DeviceRow.styles.ts
import { SxProps, Theme } from "@mui/material/styles";

export const serialCellStyles: SxProps<Theme> = {
  fontWeight: 600,
  fontSize: "0.875rem",
  color: "primary.main",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  display: "flex",
  alignItems: "center",
  height: "100%",
};

export const nameTextStyles: SxProps<Theme> = {
  fontWeight: 600,
  fontSize: "0.875rem",
  color: "text.primary",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  display: "flex",
  alignItems: "center",
  height: "100%",
};

export const modelCellStyles: SxProps<Theme> = {
  fontSize: "0.8125rem",
  color: "text.secondary",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  display: "flex",
  alignItems: "center",
  height: "100%",
};

export const featuresCellStyles: SxProps<Theme> = {
  fontSize: "0.8125rem",
  color: "text.secondary",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  height: "100%",
};

export const viewButtonStyle: SxProps<Theme> = {
  fontSize: "0.75rem",
  paddingX: 2,
  paddingY: 0.5,
  textTransform: "none",
  minWidth: "60px",
  borderColor: "primary.main",
  color: "primary.main",
  lineHeight: 1.5,
  height: "32px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "#e3f2fd",
    borderColor: "primary.main",
  },
};
