import React from 'react';
import { Container} from 'reactstrap';
import Styles from '../Styles/pages.module.scss';
import PriceListMobile from '../Components/PriceList.Component';
import PriceListDesktop from '../Components/PriceListDesktop.Component';
import NavBar from '../Components/NavBar.Component';

const Home = ({input,setProduts,produts}) => {
  return (
    <>
      <NavBar />
      <Container className={Styles.pages}>
        <PriceListMobile produts={produts} input={input} setProduts={setProduts}/>
        <PriceListDesktop produts={produts} setProduts={setProduts}/>
      </Container>
    </>
  );
};

export default Home;