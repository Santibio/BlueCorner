import axios from "axios";
import {URL} from '../config'

export const GET_PRODUCTS = "GET_PRODUCTS";

export const getProducts = () => async (dispatch) =>{
    const { data } = await axios.get(`${URL}/products`);
    dispatch({ type: GET_PRODUCTS, payload: data });
}
