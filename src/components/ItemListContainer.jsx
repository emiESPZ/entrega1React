import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllItems as getItems, getItemsByCategory } from "../data/firebase";
// import { itemsData } from "../data/itemsData.js";
import ItemCard from "./ItemCard.jsx";

// function getItems(instrumentId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (instrumentId !== undefined) {
//         const arrayFiltered = itemsData.filter((item) => {
//           return item.instrument === instrumentId;
//         });
//         resolve(arrayFiltered);
//       } else {
//         resolve(itemsData);
//       }
//     }, 700);
//   });
// }
function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { instrumentId } = useParams();
  useEffect(() => {
    if (instrumentId === undefined) {
      getItems().then((result) => {
        setItems(result);
      });
    } else {
      getItemsByCategory(instrumentId).then((result) => {
        setItems(result);
      });
    }
  }, [instrumentId]);

  return (
    <div
      className="d-flex"
      style={{ marginTop: "90px", paddingLeft: "5rem", paddingRight: "5rem" }}
    >
      {items.map((item) => (
        <ItemCard key={item.id} data={item} />
      ))}
    </div>
  );
}

export { ItemListContainer };
