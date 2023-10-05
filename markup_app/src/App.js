import React from 'react';
import { useState,useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Home from './Pages/Home.Page';
import AddProduct from './Pages/AddProduct.Page';
import NavBarC from './Components/NavBar.Component';
import Styles from './Styles/body.module.scss';
import AddFixedCosts from './Pages/AddFixedCost.Page';
import Login from './Pages/Login.Page';
import SignUp from './Pages/SignUp.Page'
import ProtectedRoutes from './utils/ProtectedRoutes'
import Page404 from './Pages/NotFound.Page'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    'setMetada':setMetaData,
    'setTotalFixedCost':setTotalFixedCost,
    'setFixedCosts':setFixedCosts

  };
  return (
  <div className={Styles.BodyLayout}>
      <NavBarC/>
      <ToastContainer />
      <Container className="mt-4">
        <Routes>
          <Route default path="/login" element={<Login/>}/>
          <Route default path="/signup" element={<SignUp/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/fixed-costs" element={<AddFixedCosts Fixed={FIXED}/>}/>
            <Route   path="/" element={<Home input={inputProduct} produts={produts} setProduts={setProduts}/>}/>
            <Route path="/addProduct" element={<AddProduct id={-1} input={inputProduct} produts={produts} setProduts={setProduts}/>} />
          </Route>
          <Route path='*' element6={<Page404/>}/>        
        </Routes>
      </Container>
    </div>
  );
};

export default App;
