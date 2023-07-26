import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Container } from 'reactstrap';
import Home from './Pages/Home';
import AddPrice from './Pages/Add.Page'
import NavBarC from './Components/NavBar.Component';
import Styles from './Styles/body.module.scss'

const App = () => {
  const [FixedCost, setFixedCosts] = useState([0, 0, 0, 0, 0]);
  const [totalFixedCost, setTotalFixedCost] = useState(0);
  const [VariableCosts, setVariableCosts] = useState([0, 0, 0, 0, 0]);
  const [totalVariableCost, setTotalVariableCost] = useState(0);
  const [Percentages, setPercentages] = useState([0, 0, 0, 0, 0]);
  const [totalPercentages, setTotalPercentages] = useState(0);
  const [produts,setProduts]=useState([]);
  const [metaData,setMetaData]=useState(['',0]);

  const inputPrices={
    'fc':FixedCost,
    'sfc':setFixedCosts,
    'vc':VariableCosts,
    'svc':setVariableCosts,
    'pc':Percentages,
    'sp':setPercentages,
    'tfc':totalFixedCost,
    'tvc':totalVariableCost,
    'tpc':totalPercentages,
    'stfc':setTotalFixedCost,
    'stvc':setTotalVariableCost,
    'stp':setTotalPercentages,
    'metadata':metaData,
    'setMetada':setMetaData
  };
  return (
  <div className={Styles.BodyLayout}>
      <NavBarC/>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home produts={produts}/>} />
          <Route path="/addPrice" element={<AddPrice  input={inputPrices} produts={produts} setProduts={setProduts}/>} />
        </Routes>
      </Container>
    </div>

  );
};

export default App;
