import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TextField  from '@mui/material/TextField';
import Styles from '../Styles/form.module.scss';
import {handleChange} from '../utils/InputsFunctions'


const FixedCosts = ({Fixed}) => {
   const{FixedCost,setFixedCosts,totalFixedCost,setTotalFixedCost}=Fixed
 

  return (
    <Container>
      <Row className="mt-4" >
        <Col>
          <h5 className={Styles.title}>Custos Fixos</h5>
        </Col>
      </Row>
      <Container>
      <Row >
          <Col sm={6}>
            <TextField
              className={Styles.inputElement}
              margin="normal"
              key={0}
              label="Agua"
              name="agua"
              variant="standard"
              value={FixedCost[0]}
              onChange={(e) => handleChange(0, e.target.value,setFixedCosts,FixedCost,setTotalFixedCost)}
              fullWidth
            />   
          </Col>
          <Col sm={6} >
            <TextField
              className={Styles.inputElement}
              margin="normal"
              key={1}
              label="Luz"
              name="luz"
              variant="standard"
              value={FixedCost[1]}
              onChange={(e) => handleChange(1, e.target.value,setFixedCosts,FixedCost,setTotalFixedCost)}
              fullWidth
            />   
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <TextField
              className={Styles.inputElement}
              margin="normal"
              key={2}
              label="Taxas e licenças"
              name="taxas"
              variant="standard"
              value={FixedCost[2]}
              onChange={(e) => handleChange(2, e.target.value,setFixedCosts,FixedCost,setTotalFixedCost)}
              fullWidth
            />   
          </Col>
          <Col sm={6} >
            <TextField
              className={Styles.inputElement}
              margin="normal"
              key={3}
              label="Manutenção e reparos"
              name="reparos"
              variant="standard"
              value={FixedCost[3]}
              onChange={(e) => handleChange(3, e.target.value,setFixedCosts,FixedCost,setTotalFixedCost)}
              fullWidth
            />   
          </Col>
        </Row>
      </Container>
      <Row className="mt-3">
        <Col>
          <div className="text-center">
            <h6>{totalFixedCost.toFixed(2)} Mts</h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FixedCosts;