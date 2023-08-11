import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalMailEnviado(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            ¡Contacto Exitoso!
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>El mail fue enviado satisfactoriamente.</h4>
            <p>
            Se van a contactar con ustede a la brevedad.
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    );
}

export default ModalMailEnviado;