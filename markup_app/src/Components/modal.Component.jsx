import Modal from 'react-bootstrap/Modal';
import Styles from '../Styles/modal.module.scss'
import Typography from '@mui/material/Typography';
export default  function ModalPage({status,onClose,title,pages}){

    return(
        <Modal show={status} onHide={onClose} closeButton={onClose} className={Styles.modalBody}>
        <Modal.Header  closeButton={onClose}>
          <Modal.Title  closeButton={onClose}>
            <Typography component="h2" variant="h5" color="primary" gutterBottom>
              <strong>{title}</strong>
            </Typography>
          </Modal.Title>
        </Modal.Header>
       <div style={{"marginTop":"-25%","padding":'3%'}}>{pages}</div> 
        <Modal.Footer style={{"height":"1px"}} >
        </Modal.Footer>
      </Modal>
    )
}