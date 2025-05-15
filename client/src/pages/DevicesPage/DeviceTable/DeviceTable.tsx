// client/src/pages/DevicesPage/DeviceTable/DeviceTable.tsx
import React from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { Device } from "../../../types/devices";
import {
  SerialNumberCell,
  DeviceNameCell,
  ModelCell,
  FeaturesCell,
  ActionsCell,
} from "./DeviceRow";
import { tableWrapperStyles, dataGridStyles } from "./DeviceTable.styles";

interface Props {
  devices: Device[];
}

const DeviceTable: React.FC<Props> = ({ devices }) => {
  const rows = devices.map((device) => ({
    ...device,
    model:
      device.model && typeof device.model === "object"
        ? device.model.name
        : device.model ?? "–",
  }));

  const columns: GridColDef[] = [
    {
      field: "serial_number",
      headerName: "Serial Number",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <SerialNumberCell params={params} />
      ),
    },
    {
      field: "device_name",
      headerName: "Name",
      flex: 1.2,
      renderCell: (params: GridRenderCellParams) => (
        <DeviceNameCell params={params} />
      ),
    },
    {
      field: "model",
      headerName: "Model",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <ModelCell params={params} />
      ),
    },
    {
      field: "device_features",
      headerName: "Device Features",
      flex: 2,
      renderCell: (params: GridRenderCellParams) => (
        <FeaturesCell params={params} />
      ),
    },
    {
      field: "actions",
      headerName: "",
      width: 90,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <ActionsCell deviceId={params.row.id} />
      ),
    },
  ];

  return (
    <Box sx={tableWrapperStyles}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        disableRowSelectionOnClick
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10, page: 0 },
          },
        }}
        pagination
        sx={dataGridStyles}
      />
    </Box>
  );
};

export default DeviceTable;
