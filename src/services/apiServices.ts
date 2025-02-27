// API services to manage data from the server

// const serverIP = process.env.REACT_APP_SERVER_IP;
const serverIP = "http://192.168.0.229:80";

const setLedState = async (led: string, value: boolean) => {

  const response = await fetch(`${serverIP}/led/${led}/${value? 1 : 0}`);
  const data = await response.json();
  return data;
}

export default { setLedState };