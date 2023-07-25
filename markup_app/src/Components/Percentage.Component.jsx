import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TextField  from '@mui/material/TextField';
import Styles from '../Styles/form.module.scss'


const Percentage = () => {
  const [costs, setCosts] = useState([0, 0, 0, 0, 0]);
  const [totalCost, setTotalCost] = useState(0);
  const handlePercentageChange = (index, value) => {
    const updatedCosts = [...costs];
    value=Math.min(Math.max(parseFloat(value), 0), 100)
    updatedCosts[index] = value || 0;
    setCosts(updatedCosts);
    setTotalCost(updatedCosts.reduce((acc, curr) => acc + curr, 0));
  };
  

  return (
    <Container>
      <Row className="mt-4" >
        <Col>
          <h5 className={Styles.title}>Percentagens</h5>
        </Col>
      </Row>
      <Container>
      <Row >
          <Col sm={6}>
            <TextField
              margin="normal"
              key={0}
              label="Lucro"
              name="lucro"
              variant="standard"
              value={costs[0]}
              onChange={(e) => handlePercentageChange(0, e.target.value)}
              fullWidth
            />   
          </Col>
          <Col sm={6} >
            <TextField
              margin="normal"
              key={1}
              label="Cartão"
              name="cartao"
              variant="standard"
              value={costs[1]}
              onChange={(e) => handlePercentageChange(1, e.target.value)}
              fullWidth
            />   
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <TextField
              margin="normal"
              key={2}
              label="IVA"
              name="iva"
              variant="standard"
              value={costs[2]}
              onChange={(e) => handlePercentageChange(2, e.target.value)}
              fullWidth
            />   
          </Col>
          <Col sm={6} >
            <TextField
              margin="normal"
              key={3}
              label="Manutenção e reparos"
              name="reparos"
              variant="standard"
              value={costs[3]}
              onChange={(e) => handlePercentageChange(3, e.target.value)}
              fullWidth
            />   
          </Col>
        </Row>
      </Container>
      <Row className="mt-3">
        <Col>
          <div className="text-center">
            <h6>{totalCost.toFixed(2)} %</h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Percentage;