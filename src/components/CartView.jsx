import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import useCartContext from "../store/CartContext";

function CartView() {
  const { cart, removeFromCart, deleteCart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <div>
        <h4>El carrito está vacío</h4>;
        <Link to="/productos">
          <h4>Volver a la tienda</h4>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        {cart.map((itemCart) => {
          return (
            <div key={itemCart.id}>
              <ListGroup>
                <ListGroup.Item>
                  <h2>
                    {itemCart.instrument} {itemCart.brand}
                  </h2>
                  <h4>{itemCart.model}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h4>Cantidad: {itemCart.cant}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h4>Precio: ${itemCart.price}</h4>
                  {/* <h3>Total: ${itemCart.cant * itemCart.price}</h3> */}
                </ListGroup.Item>
              </ListGroup>
              <Button onClick={() => removeFromCart(itemCart.id)}>X</Button>
            </div>
          );
        })}
        <h1>Total de la compra: {totalPrice()}</h1>

        <Button onClick={deleteCart}>X</Button>
      </div>
    );
  }
}
export default CartView;
