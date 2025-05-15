// client/src/pages/DevicesPage/DeviceTable/DeviceTable.styles.ts
import { SxProps, Theme } from "@mui/material/styles";

export const tableWrapperStyles: SxProps<Theme> = {
  flex: 1,
  width: "90%",
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
  mt: 2,
};

export const dataGridStyles: SxProps<Theme> = {
  flex: 1,
  backgroundColor: "#fff",
  "& .MuiDataGrid-columnHeaders": {
    position: "sticky",
    top: 0,
    backgroundColor: "#fff",
    zIndex: 1,
  },
  "& .MuiDataGrid-footerContainer": {
    position: "sticky",
    bottom: 0,
    backgroundColor: "#fff",
    zIndex: 1,
    borderTop: "1px solid #ccc",
  },
  "& .MuiDataGrid-virtualScroller": {
    overflowY: "auto",
  },
  "& .MuiDataGrid-cell": {
    display: "flex",
    alignItems: "center",
    padding: "8px 16px",
  },
  "& .MuiDataGrid-cell:focus": {
    outline: "none",
  },
  "& .MuiDataGrid-row": {
    minHeight: "60px",
    maxHeight: "60px",
  },
};
