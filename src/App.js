import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InputsSection from './InputsSection';


function App() {

  const [crypto, setCrypto] = useState("")
  const [currency, setCurrency] = useState("")
  const [data, setData] = useState([])


  return (
    <div className='app'>
      <InputsSection
        setCrypto={setCrypto}
        setCurrency={setCurrency}
        crypto={crypto}
        currency={currency}
        data={data[0]}
        setData={setData}
      />
    </div>
  );
}

export default App;
