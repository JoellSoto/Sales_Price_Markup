import Modal from 'react-bootstrap/Modal';
import Styles from '../Styles/modal.module.scss'
import Title from './Title';
export default  function ModalPage({status,onClose,title,pages}){

    return(
        <Modal show={status} onHide={onClose} closeButton={onClose} className={Styles.modalBody}>
        <Modal.Header  closeButton={onClose}>
          <Modal.Title  closeButton={onClose}><Title>{title}</Title></Modal.Title>
        </Modal.Header>
       <div style={{"marginTop":"-25%","padding":'3%'}}>{pages}</div> 
        <Modal.Footer style={{"height":"1px"}} >
        </Modal.Footer>
      </Modal>
    )
}