import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart , faTrash} from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/Paginas/Carrito/Carrito.css'; // Asegúrate de tener estilos CSS para el carrito

const Carrito = ({ cartItems, ClearCart }) => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleClearCart=() => {
        ClearCart();
        handleClose();
    }
    const handlePagar = () => {
        handleClose();
        navigate('/realizar-venta', { state: { cartItems } }); // Pasar los elementos del carrito a la página de ventas
    };

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <Badge bg="primary">{totalQuantity}</Badge>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Carrito de Compras</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cartItems.length === 0 ? (
                        <p>No hay productos en el carrito.</p>
                    ) : (
                        <ul className="list-group">
                            {cartItems.map((item, index) => (
                                <li key={index} className="list-group-item">
                                    <span>{item.name}</span>
                                    <span className="badge bg-secondary ms-2">{item.quantity}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClearCart}>
                        <FontAwesomeIcon icon={faTrash} /> Borrar Carrito
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handlePagar}>
                        Pagar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Carrito;