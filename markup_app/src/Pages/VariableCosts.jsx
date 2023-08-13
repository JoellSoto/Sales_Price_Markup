import React, { useState } from 'react';
import { Container, Row, Col, FormGroup, Input, Button } from 'reactstrap';

const VariableCosts = () => {
  const [costs, setCosts] = useState([0, 0, 0, 0, 0]);
  const [totalCost, setTotalCost] = useState(0);

  const handleChange = (index, value) => {
    const updatedCosts = [...costs];
    updatedCosts[index] = parseFloat(value) || 0;
    setCosts(updatedCosts);
    setTotalCost(updatedCosts.reduce((acc, curr) => acc + curr, 0));
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h5 className="text-center">Introdução de Custos Variáveis</h5>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12} md={4} className="mx-auto">
          <FormGroup>
            {costs.map((cost, index) => (
              <Input
                key={index}
                type="number"
                placeholder={`Custo Variável ${index + 1}`}
                value={cost}
                onChange={(e) => handleChange(index, e.target.value)}
                className="mb-2"
              />
            ))}
          </FormGroup>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12} md={4} className="mx-auto">
          <Button color="primary" block onClick={() => alert(`Custo total: ${totalCost.toFixed(2)}`)}>
            Calcular Custo Total
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <div className="text-center">
            <h6>Custo Total: {totalCost.toFixed(2)}</h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VariableCosts;