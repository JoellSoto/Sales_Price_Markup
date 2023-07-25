import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TextField  from '@mui/material/TextField';
import Styles from '../Styles/form.module.scss';
import {handlePercentageChange} from '../utils/InputsFunctions';


const Percentage = ({Percentagem}) => {
 const {percentages,setPercentages,setTotalPercentages,totalPercentages}= Percentagem;
  

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
              value={percentages[0]}
              onChange={(e) => handlePercentageChange(0, e.target.value,setPercentages,percentages,setTotalPercentages)}
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
              value={percentages[1]}
              onChange={(e) => handlePercentageChange(1, e.target.value,setPercentages,percentages,setTotalPercentages)}
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
              value={percentages[2]}
              onChange={(e) => handlePercentageChange(2, e.target.value,setPercentages,percentages,setTotalPercentages)}
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
              value={percentages[3]}
              onChange={(e) => handlePercentageChange(3, e.target.value,setPercentages,percentages,setTotalPercentages)}
              fullWidth
            />   
          </Col>
        </Row>
      </Container>
      <Row className="mt-3">
        <Col>
          <div className="text-center">
            <h6>{totalPercentages.toFixed(2)} %</h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Percentage;