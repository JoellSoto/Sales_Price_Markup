import React, { useState } from 'react';
import { Container} from 'reactstrap';
import Styles from '../Styles/pages.module.scss';
import PriceListMobile from '../Components/PriceList.Component';
import PriceListDesktop from '../Components/PriceListDesktop.Component';
import NavBar from '../Components/NavBar.Component';
import AddProduct from './AddProduct.Page'
import Modal from '../Components/modal.Component';
const Home = ({input,setProduts,produts}) => {
  const [product,setProduct]=useState({});
  const [pos,setPos]=useState(-1);
  const [openModal,setOpenModal]=useState(false);
  const page= <AddProduct id={0} input={input} produts={produts} setProduts={setProduts}/>
  return (
    <>
      <NavBar />
      <Container className={Styles.pages}>
      <Modal onClose={setOpenModal} title="Editar o Producto" pages={page}  status={openModal}/>
        <PriceListMobile isModalOpen={setOpenModal} setProduct={setProduct} setPos={setPos} produts={produts} input={input} setProduts={setProduts}/>
        <PriceListDesktop produts={produts} setProduts={setProduts}/>
      </Container>
    </>
  );
};

export default Home;