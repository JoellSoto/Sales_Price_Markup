import React from 'react';
import { Container} from 'reactstrap';
import Styles from '../Styles/pages.module.scss';
import PriceList from '../Components/PriceList.Components';

const Home = ({input,setProduts,produts}) => {
  return (
    <Container className={Styles.pages}>
      <PriceList produts={produts} input={input} setProduts={setProduts}/>
    </Container>
  );
};

export default Home;