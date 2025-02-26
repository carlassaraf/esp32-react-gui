import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import "./App.css"

export default function App() {
  const [selectedDevice, setSelectedDevice] = React.useState("");
  const [devices, setDevices] = React.useState<BluetoothDevice[]>([]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedDevice(event.target.value);
  };

  // Scan for Bluetooth devices
  const scanBluetoothDevices = async () => {
    // Check if bluetooth api is available
    if("bluetooth" in navigator) {
      try {
        // Ask for bluetooth devices
        const device = await navigator.bluetooth.requestDevice({
          acceptAllDevices: true
        });
        // Store listed devices
        setDevices(prevDevices => {
          const exists = prevDevices.some(d => d.id === device.id);
          return exists ? prevDevices : [...prevDevices, device];
        });
        console.log("[BLUETOOTH] Device found: ", device.name);
      }
      catch(error) {
        console.error("[BLUETOOTH] ", error);
      }
    }
    else {
      console.log("[BLUETOOTH] Bluetooth API not available");
    }
  };

  return (
    <div className="ui">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel sx={{ 
          color: "white",
          borderColor: "white" 
        }} 
          id="bluetooth-devices">Device</InputLabel>
        <Select sx={{ 
          "color": "white", 
          ".MuiOutlinedInput-notchedOutline": { borderColor: "white" }, // Borde blanco por defecto
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "gray" },  // Borde gris al hover
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "white" }, // Borde blanco al focus
          "svg": { color: "white" } // svg del triangulo para desplegar
        }}
          labelId="bluetooth-devices"
          id="bluetooth-devices-helper"
          value={selectedDevice}
          label="Device"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            devices.length > 0 ? (
              devices.map(device => (
                <MenuItem key={device.id} value={device.id}>
                  {device.name || "No named device"}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>Cant find any Bluetooth devices</MenuItem>
            )
          }
        </Select>
        <FormHelperText sx={{color: "white"}}>Dispositivos Bluetooth</FormHelperText>
      </FormControl>

      <Button onClick={scanBluetoothDevices} sx={{marginBottom: "2rem", padding: "0.5rem 1rem"}}>
        Scan Devices
      </Button>
    </div>
  );
}
