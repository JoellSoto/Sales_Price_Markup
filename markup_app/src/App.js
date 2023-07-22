import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Container } from 'reactstrap';
import Home from './Home';
import FixedCosts from './FixedCosts';
import VariableCosts from './VariableCosts';

const App = () => {
  return (
  <>
      <Navbar color="light" light expand="md">
        <Container>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/fixed-costs" className="nav-link">Custos Fixos</Link>
            </NavItem>
            <NavItem>
              <Link to="/variable-costs" className="nav-link">Custos Variáveis</Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fixed-costs" element={<FixedCosts />} />
          <Route path="/variable-costs" element={<VariableCosts />} />
        </Routes>
      </Container>
    </>

  );
};

export default App;
