import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemsData } from "../data/itemsData.js";
import ItemCard from "./ItemCard.jsx";
import ItemDetail from "./ItemDetail.jsx";

function getItems(instrumentId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (instrumentId !== undefined) {
        const arrayFiltered = itemsData.filter((item) => {
          return item.instrument === instrumentId;
        });
        resolve(arrayFiltered);
      } else {
        resolve(itemsData);
      }
    }, 700);
  });
}
function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { instrumentId } = useParams();
  useEffect(() => {
    getItems(instrumentId).then((result) => {
      setItems(result);
    });
  }, [instrumentId]);

  return (
    <div className="d-flex" style={{ marginTop: "90px", marginLeft: "236px" }}>
      {items.map((item) => (
        <ItemCard key={item.id} data={item} />
      ))}
    </div>
  );
}

export { ItemListContainer };
