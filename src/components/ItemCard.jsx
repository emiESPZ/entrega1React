import { Button, Card } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ data }) => {
  return (
    <Card style={{ width: "18rem", textAlign: "center" }}>
      <Card.Img
        style={{ padding: "2rem" }}
        variant="top"
        src={data.pictureUrl1}
      />
      <Card.Body>
        <Card.Title>
          {data.instrument}
          {""}
          {data.brand}
        </Card.Title>
        <Card.Text>
          {data.model}
          <br />
          Precio: {data.price}
        </Card.Text>
        <Link to={`/productos/${data.id}`}>
          <Button variant="primary">Mas info</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
