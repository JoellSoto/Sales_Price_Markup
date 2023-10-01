import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TextField  from '@mui/material/TextField';
import Styles from '../Styles/form.module.scss';
import {handleChangeFixed as handleChange} from '../utils/InputsFunctions';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Title from './Title';


const FixedCosts = ({Fixed}) => {
   const{FixedCost,setFixedCosts,totalFixedCost,setTotalFixedCost}=Fixed;
   const navigate = useNavigate();
   const saveFixed=()=>localStorage.setItem("fixed",JSON.stringify(FixedCost))
   
   useEffect(
    ()=>{
      const data=JSON.parse(localStorage.getItem("fixed"));
      if(data)
      {
        setFixedCosts(data);
        let sum=0;
        for(let i=0;i<data.length;i++)
          sum+=data[i];
          setTotalFixedCost(sum);
      }
    }// eslint-disable-next-line 
  ,[])

  return (
    <Container>
      <Row className="mt-4" >
        <Col>
        <span className={Styles.title}><Title>Custos Fixos</Title></span>
        </Col>
      </Row>
      <Container>
      <Row >
          <Col sm={6}>
            <TextField
              className={Styles.inputElement}
              margin="normal"
              key={0}
              label="Agua e Luz"
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
              label="Salarios"
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
              label="Aluguer"
              name="aluguer"
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
              label="Quantidade de Produtos"
              name="qty"
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
            <Button
              onClick={()=>{saveFixed();navigate('/')}}
              variant="contained"
              color="primary"
              sx={{
                width: '55%',
                '@media (max-width: 600px)': {
                  width: '65%',
                },}}
            >
              Salvar
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FixedCosts;