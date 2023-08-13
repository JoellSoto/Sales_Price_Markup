import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TextField  from '@mui/material/TextField';
import Styles from '../Styles/form.module.scss';
import {handleChangeString} from '../utils/InputsFunctions'


const Meta = ({Metadata}) => {
   const{metadata,setMetada}=Metadata
 

  return (
    <Container>
      <Row className="mt-4" >
        <Col>
          <h5 className={Styles.title}>Produto</h5>
        </Col>
      </Row>
      <Container>
      <Row >
          <Col sm={6}>
            <TextField
              className={Styles.inputElement}
              margin="normal"
              key={0}
              label="nome"
              name="Nome do Produto"
              variant="standard"
              value={metadata[0]}
              onChange={(e) => handleChangeString(0, e.target.value,setMetada,metadata)}
              fullWidth
            />   
          </Col>
          <Col sm={6} >
            <TextField
              className={Styles.inputElement}
              margin="normal"
              key={1}
              label="Quantidade de Produtos"
              name="qty"
              variant="standard"
              value={metadata[1]}
              onChange={(e) => handleChangeString(1,parseFloat(e.target.value),setMetada,metadata)}
              fullWidth
            />   
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
};

export default Meta;