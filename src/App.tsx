import * as React from 'react';
// import BluetoothPanel from './components/BluetoothPanel';
import "./App.css"

import LedPanel from './components/LedPanel';

const App: React.FC = () => {

  return (
    // <BluetoothPanel/>
    <div>
      <LedPanel 
        colors={["red", "green", "blue", "yellow"]} 
        size="50px"
        sliders={["red", "green", "blue"]} 
      ></LedPanel>
    </div>
  );
}

export default App;