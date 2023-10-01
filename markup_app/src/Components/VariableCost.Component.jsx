import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TextField  from '@mui/material/TextField';
import Styles from '../Styles/form.module.scss';
import {handleChange} from '../utils/InputsFunctions';
import InfiniteScroll from 'react-infinite-scroll-component';


const VariableCosts = ({Variable}) => {
   const {setVariableCosts,VariableCost,totalVariableCost,setTotalVariableCost}=Variable;
    const variableCostLables=["transporte","Tecido","Madeira","espoja","Cola","Pano Cru","Algodão","Agrafos","Parafusos","linha"];
  return (
    <Container>
      <Row className="mt-4" >
        <Col>
          <h5 className={Styles.title}>Custos Variáveis </h5>
        </Col>
      </Row>
      <Container className={Styles.scroll}>
      <span >
        <Row >
          
            {VariableCost.map((item,index)=>{
            return(<Col sm={6}>
              <TextField
                margin="normal"
                key={index}
                label={variableCostLables[index]}
                name="agua"
                variant="standard"
                value={parseFloat(item)}
                onChange={(e) => handleChange(index, e.target.value,setVariableCosts,VariableCost,setTotalVariableCost)}
                fullWidth
                type="number"
              />   
            </Col>)})}
         
        </Row>
        </span>
      </Container>
      <Row className="mt-3">
        <Col>
          <div className="text-center">
            <h6>{totalVariableCost.toFixed(2)} Mts</h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VariableCosts;