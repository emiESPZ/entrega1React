import { Button } from "react-bootstrap";
import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{count}</div>
      <div style={{ display: "flex" }}>
        <Button className="btn-success" onClick={() => setCount(count + 1)}>
          +
        </Button>
        <Button className="btn-danger" onClick={() => setCount(count - 1)}>
          -
        </Button>
      </div>
    </div>
  );
};

export default Counter;
