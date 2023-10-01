import Modal from 'react-bootstrap/Modal';
export default  function ModalPage({status,onClose,title,pages}){

    return(
        <Modal show={status} onHide={onClose} closeButton={onClose} style={{"margin-top":"10%"}} >
        <Modal.Header  closeButton={onClose}>
          <Modal.Title  closeButton={onClose}>{title}</Modal.Title>
        </Modal.Header>
       <div style={{"padding":'3%'}}>{pages}</div> 
        <Modal.Footer style={{"height":"5px"}} >
        </Modal.Footer>
      </Modal>
    )
}