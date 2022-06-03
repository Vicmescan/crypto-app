import { Col, Row, Form, Button } from 'react-bootstrap';
import CryCurrencyOptions from './CryCurrencyOptions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CurrencyOption from './CurrencyOption';
import { useState } from 'react';

function InputsSection({ setCrypto, setCurrency, crypto, currency }) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [ranking, setRanking] = useState("");
  const [changeIn30, setChangeIn30] = useState("");
  const [update, setUpdate] = useState("");
  const [show, setShow] = useState(false);

  const letSearch = () => {
    if (crypto !== "" && currency !== "") {
      fetch(`https://api.nomics.com/v1/currencies/ticker?key=e2d552136f52b7162e29b6217165496c1575207a&ids=${crypto}&interval=1d,30d&convert=${currency}&platform-currency=ETH&per-page=100&page=1`)
        .then(response => response.json())
        .then(data => {
          data = data[0]
          console.log(data);
          setShow(true);
          setName(data.name);
          setPrice(parseFloat(data.price).toFixed(2));
          setRanking(data.rank);
          setChangeIn30(parseFloat(data["30d"].price_change_pct).toFixed(2));
          setUpdate((data.price_timestamp).slice(11,19)+ ", " + data.price_timestamp.slice(0,10));
        })
    }
  }
console.log(update);
  return (
    <div className='inputsSection'>
      <Form>
        <Row>
          <Col>
            <Form.Select aria-label="Default select example" size="lg" onChange={(e) => setCrypto(e.target.value)} >
              <CryCurrencyOptions />
            </Form.Select>
          </Col>
          <Col bg="secondary">
            <Form.Select aria-label="Default select example" size="lg" onChange={(e) => setCurrency(e.target.value)} >
              <CurrencyOption />
            </Form.Select>
          </Col>
          <Col>
            <div className="d-grid gap-2">
              <Button variant="outline-secondary" size="lg" onClick={letSearch} >Search</Button  >
            </div>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            {crypto !== "" && currency !== "" && show === true ?
              <h3 style={{ textAlign: "center" }}>1 {name} are {price} {currency} </h3>
              : <h3 style={{ textAlign: "center" }}>Search for a crypto currency and a currency</h3>
            }
          </Col>
        </Row>
        <br></br>
        <Row>
          {crypto !== "" && currency !== "" && show === true ?
            <p>{name} ({crypto}) is a cryptocurrency that is ranked number {ranking} in the ranking, and in the last 30 days had a percentage change of {changeIn30}% </p> 
            : <p>Search for a crypto currency and a currency</p>
          }
        </Row>
        <Row>
        {crypto !== "" && currency !== "" && show === true ?
          <p style={{ textAlign: "right" }}>Last update: {update}</p> : null
        }
        </Row>
      </Form>
    </div>
  );
}

export default InputsSection;