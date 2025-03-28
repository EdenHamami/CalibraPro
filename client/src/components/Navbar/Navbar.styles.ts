//client\src\components\Navbar\Navbar.styles.ts
import { SxProps, Theme } from "@mui/material";

export const toolbarStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
};

export const logoStyles: SxProps<Theme> = {
  cursor: "pointer",
};

export const avatarStyles: SxProps<Theme> = {
  bgcolor: "#ffffff22",
  width: 32,
  height: 32,
};

export const userNameStyles: SxProps<Theme> = {
  ml: 1,
};
