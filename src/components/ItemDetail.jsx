import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { itemsData } from "../data/itemsData";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Counter from "./Counter";
import useCartContext from "../store/CartContext";

const ItemDetail = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  const { addToCart } = useCartContext();

  useEffect(() => {
    (async () => {
      const itemData = await getItemDetail();
      setItem(itemData);
    })();
  }, []);

  const getItemDetail = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(itemsData.find((i) => i.id == itemId));
      }, 1000);
    });
  };

  const onAdd = (count) => {
    addToCart(item, count);
    console.log("Agregado al Cart", count);
  };

  return (
    <>
      <div
        style={{
          border: "2px solid rgb(122 5 44)",
          margin: "5rem",
          padding: "1rem",
          textShadow: "0 0 3px #FF0000",
        }}
      >
        <div>
          <img
            src={item.pictureUrl1}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="instrumento"
          />
          <div>
            <h1>
              <strong>
                {item.instrument} {item.brand}
              </strong>
              {item.model}
            </h1>
            <p style={{ marginRight: "40rem", textAlign: "justify" }}>
              {item.description}
            </p>

            <br />
            <br />
            <ul className="list-disc">
              <p className="text-xl">CARACTERÍSTICAS</p>
              <br />
              <li>{item.caracteristica1}</li>
              <li>{item.caracteristica2}</li>
              <li>{item.caracteristica3}</li>
              <li>{item.caracteristica4}</li>
            </ul>
            <Button onClick={() => onAdd(item)} className="btn btn-primary">
              COMPRAR
            </Button>
            <Counter />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
