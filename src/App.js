import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";

function App() {
  //Aquí ira la logica

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/productos"
            element={<ItemListContainer titulo="Contenedor de productos" />}
          />
          <Route path="/productos/:itemId" element={<ItemDetail />} />
          <Route
            path="/instrument/:instrumentId"
            element={<ItemListContainer />}
          />
          <Route path="/" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
