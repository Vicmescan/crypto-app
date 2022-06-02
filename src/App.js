import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InputsSection from './InputsSection';


function App() {

  const [crypto, setCrypto] = useState("")
  const [currency, setCurrency] = useState("")
  const [search, setSearch] = useState(false)
  const [data, setData] = useState([])

  console.log(data)

  useState(() => {
    fetch(`https://api.nomics.com/v1/currencies/ticker?key=e2d552136f52b7162e29b6217165496c1575207a&ids=${crypto}&interval=1d,30d&convert=${currency}&platform-currency=ETH&per-page=100&page=1`)
      .then(response => response.json())
      .then(data => setData(data))
  },[search])


  return (
    <div className='app'>
      <InputsSection
        setCrypto={setCrypto}
        setCurrency={setCurrency}
        crypto={crypto}
        currency={currency}
        setSearch={setSearch}
        />
    </div>
  );
}

export default App;
