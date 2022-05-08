import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { itemsData } from "../data/itemsData";

const ItemDetail = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});

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

  return (
    <>
      <div
        className="hero min-h-screen bg-base-200"
        style={{
          border: "2px solid rgb(122 5 44)",
          margin: "5rem",
          padding: "1rem",
          textShadow: "0 0 3px #FF0000",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={item.pictureUrl1}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="instrumento"
          />
          <div>
            <h1 className="text-5xl font-bold">
              <strong>
                {item.instrument} {item.brand}
              </strong>
              <p className="text-4xl">{item.model}</p>
            </h1>
            <p className="py-6">
              {item.description}
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
            </p>
            <button className="btn btn-primary">COMPRAR</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
