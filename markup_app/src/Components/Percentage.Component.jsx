import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TextField  from '@mui/material/TextField';
import Styles from '../Styles/form.module.scss';
import {handlePercentageChange,handleProduct} from '../utils/InputsFunctions';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Title from './Title';

const Percentage = ({Percentagem}) => {
  const navigate = useNavigate();
 const {setVariableCosts,setMetada,percentages,setPercentages,setTotalPercentages,totalPercentages,FixedCost,closeModal,
  totalFixedCost,VariableCost,totalVariableCost,setProduts,produts,metaData,id,setTotalFixedCost,setFixedCosts}= Percentagem;
  
  const onSubmit=()=>{
    if(totalFixedCost && FixedCost[3]!==0){
      if(totalVariableCost===0 || !metaData[0]){
        toast.error("Antes de Submeter Preencha o Nome do Produto e Adicione pelo menos um Custo Variavel!");
      }else{
      handleProduct(id,FixedCost,
        totalFixedCost,VariableCost,totalVariableCost,percentages,totalPercentages,
        setProduts,produts,metaData,setMetada,setVariableCosts,setPercentages);
        navigate("/");
        if(id!==-1){
          closeModal(false);
          toast.success("Produto Editado com Sucesso!");
        }else
          toast.success("Produto Adicionado com Sucesso!"); 
      }}
    else{
      toast.error("Introduza os Custos Fixos e a Quantidade de Produtos");
      navigate("/fixed-costs");
    }
   
  }

  useEffect(
    ()=>{
      const data=JSON.parse(localStorage.getItem("fixed"));
      if(data)
      {
        let sum=0;
        for(let i=0;i<data.length;i++)
          sum+=data[i];
        if(sum!==0){
          setFixedCosts(data)
          setTotalFixedCost(sum);
        }
      }
    }// eslint-disable-next-line
  ,[])

  return (
    <Container>
      <Row className="mt-4" >
        <Col>
          <span className={Styles.title}><Title>Percentagens</Title></span>
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
              type="number"
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
              type="number"
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
              type="number"
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
              type="number"
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
            onClick={()=>onSubmit()}
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