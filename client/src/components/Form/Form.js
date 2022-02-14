import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Tags from "./Tags/Tags";
import axios from "axios";
import { getProducts } from "../../actions";
import style from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    productName: "",
    tag: "",
  });
  const [tags, setTags] = useState([]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const addTag = (e) => {
    e.preventDefault();
    setTags((prev) => [...prev, input.tag]);
    setInput((prev) => ({
      ...prev,
      tag: "",
    }));
  };

  const saveProduct = (e) => {
    e.preventDefault();

    if(input.productName.trim() === "") return alert("Falta nombre del producto")
    if (!tags.length) return alert("Faltan etiquetas");

    const PRODUCT = {
      productName: input.productName,
      tags,
    };

    axios
      .post("http://localhost:3001/api/products", PRODUCT)
      .then((response) => {
        console.log(response.data);
      });

    setInput({ productName: "", tag: "" });
    setTags([]);
    // Espera para que se genere la relación, sino no te trae las etiquetas
    setTimeout(() => {
      dispatch(getProducts());
    }, 100);
  };

  return (
    <div className={style.form_container}>
      <form onSubmit={saveProduct}>
        <h2>Crear productos</h2>
        <div className={style.input_container}>
          <label>Nombre</label>
          <input
            type="text"
            name="productName"
            value={input.productName}
            onChange={inputHandler}
          />
        </div>
        <div>
          <div className={style.tags_container}>
            <label>Etiquetas</label>
            <div className={style.input_container}>
              <label>Etiqueta</label>
              <div className={style.inputTag_container}>
                <input
                  type="text"
                  name="tag"
                  value={input.tag}
                  onChange={inputHandler}
                />
                <button onClick={addTag}>Agregar</button>
              </div>
            </div>
          </div>
          <div>
            <Tags tags={tags} setTags={setTags} />
          </div>
        </div>
        <button type="submit">Guardar producto</button>
      </form>
    </div>
  );
};

export default Form;
