import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import TextField  from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import NavigateNext from '@mui/icons-material/NavigateNext';
import NavigateBefore from '@mui/icons-material/NavigateBefore';

const FixedCosts = () => {
  const [costs, setCosts] = useState([0, 0, 0, 0, 0]);
  const [totalCost, setTotalCost] = useState(0);

  const handlePrevious = () => {
    // Add your logic for the previous button
    console.log('Previous button clicked');
  };

  const handleNext = () => {
    // Add your logic for the next button
    console.log('Next button clicked');
  };
  const handleChange = (index, value) => {
    const updatedCosts = [...costs];
    updatedCosts[index] = parseFloat(value) || 0;
    setCosts(updatedCosts);
    setTotalCost(updatedCosts.reduce((acc, curr) => acc + curr, 0));
  };

  return (
    <Container>
      <Row className="mt-4"  >
        <Col>
          <h5 className="text-center">Introdução de Custos Fixos</h5>
        </Col>
      </Row>
      <Container>
      <Row >
          <Col sm={6}>
            <TextField
              key={0}
              label="Agua"
              name="agua"
              variant="standard"
              value={costs[0]}
              onChange={(e) => handleChange(0, e.target.value)}
              fullWidth
            />   
          </Col>
          <Col sm={6} >
            <TextField
              key={1}
              label="Luz"
              name="luz"
              variant="standard"
              value={costs[1]}
              onChange={(e) => handleChange(1, e.target.value)}
              fullWidth
            />   
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm={6}>
            <TextField
              key={2}
              label="Taxas e licenças"
              name="taxas"
              variant="standard"
              value={costs[2]}
              onChange={(e) => handleChange(2, e.target.value)}
              fullWidth
            />   
          </Col>
          <Col sm={6} >
            <TextField
              key={3}
              label="Manutenção e reparos"
              name="reparos"
              variant="standard"
              value={costs[3]}
              onChange={(e) => handleChange(3, e.target.value)}
              fullWidth
            />   
          </Col>
        </Row>
      </Container>
      <Row className="mt-3" >
        <Col xs={12} md={4} className="mx-auto">
         
          <IconButton onClick={handlePrevious}>
            <NavigateBefore /> Anterior
          </IconButton>
          <IconButton onClick={handleNext}>
             Proximo<NavigateNext />
          </IconButton>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <div className="text-center">
            <h6>Custo Fixo Total: {totalCost.toFixed(2)} Mts</h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FixedCosts;