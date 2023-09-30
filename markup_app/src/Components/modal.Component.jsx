import Modal from 'react-bootstrap/Modal';
export default  function ModalPage({status,onClose,title,pages}){

    return(
        <Modal show={status} onHide={onClose} style={{"marginTop":"55px"}}>
        <Modal.Header  closeButton>
          <Modal.Title  >{title}</Modal.Title>
        </Modal.Header>
       <div style={{"marginTop":"-25%","padding":'3%'}}>{pages}</div> 
        <Modal.Footer style={{"height":"1px"}} >
        </Modal.Footer>
      </Modal>
    )
}