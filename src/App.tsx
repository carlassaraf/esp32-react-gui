import React, { useEffect, useState } from 'react';
// import BluetoothPanel from './components/BluetoothPanel';
import "./App.css"

import LedPanel from './components/LedPanel';
import BuzzerPanel from './components/BuzzerPanel';
import TemperaturePanel from './components/TemperaturePanel';
import GPIOButtonPanel from './components/GPIOButtonPanel';
import LuxPanel from './components/LuxPanel';

import apiServices from './services/apiServices';
import { CircularProgress } from '@mui/material';

const App: React.FC = () => {
  const [ledStates, setLedStates] = useState<Array<boolean>>([false, false, false]);
  const [rgbStates, setRgbStates] = useState("");
  const [buzzerState, setBuzzerState] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Tries to fetch data on component load
  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await apiServices.getAll();
        console.log(data);
        setLedStates(data.leds);
        setRgbStates(data.rgb);
        setBuzzerState(data.buzzer);
      }
      catch(error) {
        console.error("Failed to fetch");
      }
      finally {
        // When successful, no more loading spinner
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Render a loading spinner in case data is not ready
  if(loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress/>
      </div>
    );
  }

  return (
    <div id="app-panels">
      <LedPanel 
        colors={["red", "yellow", "green"]} 
        size="50px"
        initialStates={ledStates}
        rgbInitial={rgbStates}
      ></LedPanel>
      <BuzzerPanel initialState={buzzerState}/>
      <TemperaturePanel/>
      <GPIOButtonPanel
        names={["IZQ", "ENTER", "DER"]}
        pins={[13, 15, 23]}
      ></GPIOButtonPanel>
      <LuxPanel></LuxPanel>
    </div>
  );
}

export default App;