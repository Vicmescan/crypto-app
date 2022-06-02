import { Col, Row, Form, Button } from 'react-bootstrap';
import CryCurrencyOptions from './CryCurrencyOptions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CurrencyOption from './CurrencyOption';

function InputsSection({  setCrypto, setCurrency, crypto, currency, setSearch }) {


  const letSearch = () => {
    if (crypto && currency) {
      setSearch(true)
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
            <h3 style={{ textAlign: "center" }}>1 </h3>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default InputsSection;