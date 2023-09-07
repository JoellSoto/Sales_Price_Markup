import React from 'react';
import { useState,useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Home from './Pages/Home.Page';
import AddProduct from './Pages/AddProduct.Page';
import NavBarC from './Components/NavBar.Component';
import Styles from './Styles/body.module.scss';
import AddFixedCosts from './Pages/AddFixedCost.Page';
import Login from './Pages/Login.Page'

const App = () => {
  const [FixedCost, setFixedCosts] = useState([0, 0, 0, 0, 0]);
  const [totalFixedCost, setTotalFixedCost] = useState(0);
  const [VariableCosts, setVariableCosts] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [totalVariableCost, setTotalVariableCost] = useState(0);
  const [Percentages, setPercentages] = useState([0, 0, 0, 0, 0]);
  const [totalPercentages, setTotalPercentages] = useState(0);
  const [produts,setProduts]=useState([]);
  const [metaData,setMetaData]=useState(['']);
 


  useEffect(
    ()=>{
      const data=localStorage.getItem("Products");
      if(data)
        setProduts(JSON.parse(data));
    }
  ,[])
 
  const FIXED={
    'FixedCost':FixedCost,
    'setFixedCosts':setFixedCosts,
    'totalFixedCost':totalFixedCost,
    'setTotalFixedCost':setTotalFixedCost     
  } 

  const inputProduct={
    'fc':FixedCost,
    'vc':VariableCosts,
    'svc':setVariableCosts,
    'pc':Percentages,
    'sp':setPercentages,
    'tfc':totalFixedCost,
    'tvc':totalVariableCost,
    'tpc':totalPercentages,
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
          <Route path="/login" element={<Login/>}/>
          <Route path="/fixed-costs" element={<AddFixedCosts Fixed={FIXED}/>}/>
          <Route path="/" element={<Home input={inputProduct} produts={produts} setProduts={setProduts}/>}/>
          <Route path="/addProduct" element={<AddProduct id={-1} input={inputProduct} produts={produts} setProduts={setProduts}/>} />
        </Routes>
      </Container>
    </div>

  );
};

export default App;
