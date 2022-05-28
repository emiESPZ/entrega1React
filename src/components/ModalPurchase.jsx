import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ModalPurchase = () => {
  return (
    <Modal.Dialog mt="5">
      <Modal.Header closeButton>
        <Modal.Title>Compra Finalizada</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p></p>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/productos">
          <Button variant="primary">Ok</Button>
        </Link>
      </Modal.Footer>
    </Modal.Dialog>
  );
};
export default Modal;
