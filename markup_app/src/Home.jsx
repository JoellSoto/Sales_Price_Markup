import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

const Home = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h5 className="text-center">Bem-vindo ao Sistema de Custos</h5>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button tag={Link} to="/fixed-costs" color="primary" block>
            Introdução de Custos Fixos
          </Button>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <Button tag={Link} to="/variable-costs" color="primary" block>
            Introdução de Custos Variáveis
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;