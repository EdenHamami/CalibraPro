// client/src/pages/DevicesPage/DeviceTable/DeviceRow.tsx
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Typography, Button, Tooltip } from "@mui/material";
import {
  serialCellStyles,
  modelCellStyles,
  featuresCellStyles,
  viewButtonStyle,
  nameTextStyles,
} from "./DeviceRow.styles";

export const SerialNumberCell = ({ params }: { params: GridRenderCellParams }) => (
  <Typography sx={serialCellStyles}>{params.value}</Typography>
);

export const DeviceNameCell = ({ params }: { params: GridRenderCellParams }) => (
  <Typography sx={nameTextStyles}>{params.value}</Typography>
);

export const ModelCell = ({ params }: { params: GridRenderCellParams }) => (
  <Typography sx={modelCellStyles}>
    {params.value || <em style={{ color: "#999" }}>–</em>}
  </Typography>
);

export const FeaturesCell = ({ params }: { params: GridRenderCellParams }) => (
  <Typography sx={featuresCellStyles}>{params.value}</Typography>
);

export const ActionsCell = ({ deviceId }: { deviceId: number }) => (
  <Tooltip title="View Details">
    <Button
      variant="outlined"
      size="small"
      sx={viewButtonStyle}
      onClick={() => console.log("View device", deviceId)}
    >
      View
    </Button>
  </Tooltip>
);
