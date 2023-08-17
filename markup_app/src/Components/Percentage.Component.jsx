import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TextField  from '@mui/material/TextField';
import Styles from '../Styles/form.module.scss';
import {handlePercentageChange,handleProduct} from '../utils/InputsFunctions';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";


const Percentage = ({Percentagem}) => {
  const navigate = useNavigate();
 const {percentages,setPercentages,setTotalPercentages,totalPercentages,FixedCost,
  totalFixedCost,VariableCost,totalVariableCost,setProduts,produts,metaData,id}= Percentagem;
  

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
            <Button
            onClick={()=>{handleProduct(id,FixedCost,
            totalFixedCost,VariableCost,totalVariableCost,percentages,totalPercentages,setProduts,produts,metaData);navigate("/")}}
      variant="contained"
      color="primary"
      sx={{
        width: '55%',

        '@media (max-width: 600px)': {
          width: '65%',
        },
      }}
    >
      Calcular
    </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Percentage;