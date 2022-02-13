import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./actions";
import Form from "./components/Form/Form";
import { ListProducts } from "./components/ListProducts/ListProducts";
import { Title } from "./components/Title/Title";
import style from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className={style.App}>
      <Title />
      <div className={style.main_container}>
        <Form />
        <ListProducts />
      </div>
    </div>
  );
}

export default App;
