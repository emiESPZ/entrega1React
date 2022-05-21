import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";
import { CartContextProvider } from "../src/store/CartContext";
import CartView from "./components/CartView";

function App() {
  //Aquí ira la logica

  return (
    <>
      <CartContextProvider>
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
            <Route path="/cart" element={<CartView />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
