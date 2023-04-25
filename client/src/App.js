import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [ data, setData ] = React.useState(null);
  async function sendRequest() {
    const temp = new FormData();
    temp.append('file', data);
    const result = await axios.post('http://localhost:5000/?fname=file', temp, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(result);
  }
  return (
    <div className="App">
      <input type='file' onChange={(e) => {
        setData(e.target.files[0]);
      }} />
      {data != null && <button onClick={sendRequest}>fire me</button>}
    </div>
  );
}

export default App;
