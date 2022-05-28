import React, { useState } from "react";
import { Button, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import useCartContext from "../store/CartContext";
import { createBuyOrder } from "../data/firebase";
import { ModalPurchase } from "./ModalPurchase";

export function CartView() {
  const { cart, removeFromCart, deleteCart, totalPrice } = useCartContext();
  const [purchase, setPurchase] = useState(false);

  const toggle = () => {
    setPurchase((purchase) => !purchase);
  };

  function handleBuy() {
    const itemsToBuy = cart.map((item) => ({
      instrument: item.instrument,
      brand: item.brand,
      model: item.model,
      cant: item.cant,
      price: item.price,
      id: item.id,
    }));

    const buyOrder = {
      buyer: {
        name: "Emiliano",
        phone: 14563145,
        email: "shjksd@dsfjusd.com",
      },
      items: itemsToBuy,
      total: totalPrice(),
    };
    createBuyOrder(buyOrder);
    deleteCart();
  }

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
      <div
        style={{
          backgroundColor: purchase ? "white" : "",
          zIndex: purchase ? "-100" : "",
        }}
      >
        {cart.map((itemCart) => {
          return (
            <div
              key={itemCart.id}
              style={{
                marginLeft: "2rem",
                marginTop: "5rem",
                backgroundColor: purchase ? "white" : "",
              }}
            >
              <ListGroup
                style={{
                  width: "40rem",
                }}
              >
                <ListGroup.Item
                  style={{
                    backgroundColor: purchase ? "black" : "",
                    zIndex: purchase ? "-100" : "",
                  }}
                >
                  <h2>
                    {itemCart.instrument} {itemCart.brand}
                  </h2>
                  <h4>{itemCart.model}</h4>
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    backgroundColor: purchase ? "black" : "",
                    zIndex: purchase ? "-100" : "",
                  }}
                >
                  <h4>Cantidad: {itemCart.cant}</h4>
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    backgroundColor: purchase ? "black" : "",
                    zIndex: purchase ? "-100" : "",
                  }}
                >
                  <h4>Precio: ${itemCart.price}</h4>
                  {/* <h3>Total: ${itemCart.cant * itemCart.price}</h3> */}
                </ListGroup.Item>
              </ListGroup>
              <Button
                style={{
                  visibility: purchase ? "hidden" : "",
                }}
                onClick={() => removeFromCart(itemCart.id)}
              >
                X
              </Button>
            </div>
          );
        })}
        <br />
        {purchase && ModalPurchase()}
        <div style={{ marginLeft: "2rem" }}>
          <h3 style={{ visibility: purchase ? "hidden" : "" }}>
            Total de la compra: {totalPrice()}
          </h3>
          <Button
            style={{
              visibility: purchase ? "hidden" : "",
            }}
            onClick={deleteCart}
          >
            X
          </Button>
          <Button
            style={{
              marginLeft: "2rem",
              visibility: purchase ? "hidden" : "",
            }}
            onClick={(handleBuy, toggle)}
          >
            COMPRAR
          </Button>
        </div>
      </div>
    );
  }
}

export default CartView;
