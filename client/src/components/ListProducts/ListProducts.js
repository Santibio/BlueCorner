import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions";
import { URL } from "../../config";
import style from "./ListPorducts.module.css";
import * as Unicons from "@iconscout/react-unicons";


export const ListProducts = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {}, [products]);

  const deleteProduct = (id) => {
    axios.delete(`${URL}/products/${id}`).then((result) => {
      console.log(result.data);
      dispatch(getProducts());
    });
  };



  return (
    <div className={style.products_container}>
      {products.length <= 0 && (<h3>Sin productos</h3>)}
      <ul>
        {products?.map(({ nombre, id, etiqueta }) => (
          <li key={id}>
            <div>
              <h3>{nombre}</h3>
              <div className={style.tags_container}>
                {etiqueta.map((tag) => (
                  <span>{tag.nombre} </span>
                ))}
              </div>
            </div>
            <div className={style.delete_button_container}>
              <button onClick={() => deleteProduct(id)}>
                <Unicons.UilTimes />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
