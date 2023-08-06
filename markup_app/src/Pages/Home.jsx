import React from 'react';
//import { Link } from 'react-router-dom';
import { Container} from 'reactstrap';
import Styles from '../Styles/pages.module.scss';
import PriceList from '../Components/PriceList.Components';

const Home = ({produts}) => {
  
  return (
    <Container className={Styles.pages}>
      <PriceList Produts={produts}/>
    </Container>
  );
};

export default Home;