import { Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";

function ItemCount(props) {
  const [count, setCount] = useState(props.initial);

  function handleAdd() {
    if (count < props.stock) setCount(count + 1);
  }
  function handleSubstract() {
    if (count > props.stock) setCount(count - 1);
  }
  function handleClick() {
    props.onAdd(count);
  }

  return (
    <div>
      <div>{count}</div>
      <div style={{ display: "flex" }}>
        <Button className="btn-success" onClick={handleAdd}>
          +
        </Button>
        <Button className="btn-danger" onClick={handleSubstract}>
          -
        </Button>
        <Button onClick={handleClick} className="btn btn-primary">
          COMPRAR
        </Button>
      </div>
    </div>
  );
}

export default ItemCount;
