import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Container } from 'reactstrap';
import Home from './Pages/Home';
import FixedCosts from './Pages/Add.Page';
import VariableCosts from './Pages/VariableCosts';
import NavBarC from './Components/NavBar.Component';
import Styles from './Styles/body.module.scss'

const App = () => {
  return (
  <div className={Styles.BodyLayout}>
      <NavBarC/>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fixed-costs" element={<FixedCosts />} />
          <Route path="/variable-costs" element={<VariableCosts />} />
        </Routes>
      </Container>
    </div>

  );
};

export default App;
