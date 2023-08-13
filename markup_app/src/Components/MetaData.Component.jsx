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
      <Row className={Styles.centerElement}>
          <Col sm={6} >
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
              key={0}
              label="Descrição"
              name="descricao"
              variant="standard"
              fullWidth
            />   
          </Col>
         
        </Row>
        
      </Container>
    </Container>
  );
};

export default Meta;