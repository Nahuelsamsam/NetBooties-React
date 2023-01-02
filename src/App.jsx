import { useState } from "react";
import NavBar from "./components/container/NavBar/NavBar";
//import "./App.css";
import { ItemListContainer } from "./components/container/ItemListContainer/ItemListContainer";


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo={"Estamos trabajando..."} />
    </>
  );
}

export default App;
