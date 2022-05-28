import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import { itemsData } from "../data/itemsData";
import { Button } from "react-bootstrap";
import Counter from "./Counter";
import useCartContext from "../store/CartContext";
import { getItem as getInstrument } from "../data/firebase";

const ItemDetail = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState();
  const { addToCart } = useCartContext();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    getInstrument(itemId).then((resolve) => {
      setItem(resolve);
    });
  }, [itemId]);

  // const getItemDetail = () => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(itemsData.find((i) => i.id == itemId));
  //     }, 2000);
  //   });
  // };

  const onAdd = (count) => {
    addToCart(item, count);
    setIsInCart(true);
    console.log("Agregado al Cart", count, item.instrument);
  };
  if (item === undefined) {
    return <h4>Cargando...</h4>;
  } else {
    return (
      <>
        <div
          style={{
            border: "2px solid rgb(122 5 44)",
            margin: "5rem",
            padding: "1rem",
            textShadow: "0 0 3px #FF0000",
            maxWidth: "75rem",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img
              src={item.pictureUrl1}
              style={{ maxWidth: "25%" }}
              alt="instrumento"
            />
            <div style={{ textAlign: "justify" }}>
              <h1>
                <strong>
                  {item.instrument} {item.brand}
                </strong>
                {item.model}
              </h1>
              <p style={{ textAlign: "justify" }}>{item.description}</p>

              <br />

              <ul className="list-disc">
                <p className="text-xl">CARACTERÍSTICAS</p>

                <li>{item.caracteristica1}</li>
                <li>{item.caracteristica2}</li>
                <li>{item.caracteristica3}</li>
                <li>{item.caracteristica4}</li>
              </ul>

              {isInCart ? (
                <Link to="/cart">
                  <p style={{ color: "green", fontWeight: "800" }}>
                    Ir al carrito
                  </p>
                </Link>
              ) : (
                <Counter stock={item.stock} onAdd={onAdd} initial={1} />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ItemDetail;
