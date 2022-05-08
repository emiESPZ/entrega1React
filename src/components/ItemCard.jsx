import { faWeight } from "@fortawesome/free-solid-svg-icons";
import { Button, Card } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const styleH1 = {
  fontSize: 40,
  color: "#4a54f1",
  textAlign: "center",
  paddingTop: "100px",
  fontWeight: "800",
};

const ItemCard = ({ data }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.pictureUrl1} />
      <Card.Body>
        <Card.Title>
          {data.instrument}
          {""}
          {data.brand}
        </Card.Title>
        <Card.Text>
          <p>
            {data.model}
            <br />
            Precio: {data.price}
          </p>
        </Card.Text>
        <Link to={`/productos/${data.id}`}>
          <Button variant="primary">Mas info</Button>
        </Link>
      </Card.Body>
    </Card>

    /*  <div className="card w-96 bg-base-100 shadow-xl ml-4 mr-4">
      <figure className="px-10 pt-10">
        <img src={data.pictureUrl1} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {data.instrument}
          <br />
          {data.model}
        </h2>
        <p>${data.price}</p>
        <div className="card-actions">
          
            <button className="btn btn-primary">Más info</button>
          </Link>
        </div>
      </div>
    </div> */
  );
};

export default ItemCard;
