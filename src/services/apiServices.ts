// API services to manage data from the server

// const serverIP = process.env.REACT_APP_SERVER_IP;
const serverIP = "http://192.168.111.148:80";

const setLedState = async (led: string, value: boolean) => {

  const response = await fetch(`${serverIP}/led/${led}/${value? 1 : 0}`);
  const data = await response.json();
  return data;
}

const setBuzzerState = async (value: boolean) => {

  const response = await fetch(`${serverIP}/buzzer/${value? 1 : 0}`);
  const data = await response.json();
  return data;
}

const setRGB = async (red: number, green: number, blue: number) => {

  const response = await fetch(`${serverIP}/rgb?r=${red}&g=${green}&b=${blue}`);
  const data = await response.json();
  return data
}

const getAll = async () => {
  const response = await fetch(serverIP);
  const data = await response.json();
  return data;
}

const getTemperature = async () => {
  const response = await fetch(`${serverIP}/temperature`);
  const data = await response.json();
  return data;
}

const getLux = async () => {
  const response = await fetch(`${serverIP}/lux`);
  const data = await response.json();
  return data;
}

export default { setLedState, setBuzzerState, setRGB, getAll, getTemperature, getLux };