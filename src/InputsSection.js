import { Col, Row, Form, Button } from 'react-bootstrap';
import CryCurrencyOptions from './CryCurrencyOptions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CurrencyOption from './CurrencyOption';
import { useState } from 'react';

function InputsSection({ setCrypto, setCurrency, crypto, currency }) {

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [ranking, setRanking] = useState("")

  const letSearch = () => {
    if (crypto !== "" && currency !== "") {
      fetch(`https://api.nomics.com/v1/currencies/ticker?key=e2d552136f52b7162e29b6217165496c1575207a&ids=${crypto}&interval=1d,30d&convert=${currency}&platform-currency=ETH&per-page=100&page=1`)
        .then(response => response.json())
        .then(data => {
          console.log(data[0]);
          setName(data[0].name);
          setPrice(parseFloat(data[0].price).toFixed(2));
          setRanking(data[0].rank);
        })
    }
  }


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
            <h3 style={{ textAlign: "center" }}>1 {name} are {price} {currency} </h3>
          </Col>
        </Row>
        <br></br>
        <Row>
          <p>{name} ({crypto}) is a cryptocurrency that is ranked number {ranking} in the ranking. </p>
        </Row>
      </Form>
    </div>
  );
}

export default InputsSection;