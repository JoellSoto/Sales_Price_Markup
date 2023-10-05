import React, { useState } from 'react';
import { Container} from 'reactstrap';
import Styles from '../Styles/pages.module.scss';
import PriceListMobile from '../Components/PriceList.Component';
import PriceListDesktop from '../Components/PriceListDesktop.Component';
import NavBar from '../Components/NavBar.Component';
import AddProduct from './AddProduct.Page'
import Modal from '../Components/modal.Component';
const Home = ({input,setProduts,produts}) => {
  const [pos,setPos]=useState(-1);

  const [openModal,setOpenModal]=useState(false);
  const exitModal=()=>{
    setOpenModal(false);
  }
  const page= <AddProduct id={pos} input={input} produts={produts} setProduts={setProduts} closeModal={setOpenModal}/>
  return (
    <>
      <NavBar />
      <Container className={Styles.pages}>
        <PriceListMobile isModalOpen={setOpenModal} setPos={setPos} produts={produts} input={input} setProduts={setProduts}/>
        <PriceListDesktop produts={produts} setProduts={setProduts}  isModalOpen={setOpenModal} setPos={setPos} input={input}/>
        <Modal onClose={()=>exitModal()} onHide={()=>exitModal()}  title="Editar Produto" pages={page}  status={openModal}/>
      </Container>
    </>
  );
};

export default Home;