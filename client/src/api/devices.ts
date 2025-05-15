//client\src\api\devices.ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_URL = `${API_BASE_URL}/devices`;

export const fetchDevicesByUser = async (userId: number, token: string) => {
    const response = await fetch(`${API_URL}/?user_id=${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch devices");
    }
    const data = await response.json()
    console.log(data)
    return data;
  };
  
export const addDevice = async (
  deviceData: {
    serial_number: string;
    model?: number | null;
    user: number;
    device_name?: string;
    device_features?: string;
  },
  token: string
) => {
  const response = await fetch(API_URL + "/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deviceData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    
    // Extract specific error for duplicate serial
    if (errorData?.serial_number?.[0]) {
      throw new Error(errorData.serial_number[0]);
    }

    // Generic error fallback
    throw new Error(errorData?.detail || "Failed to add device");
  }

  return await response.json();
};
