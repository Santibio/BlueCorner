import {GET_PRODUCTS} from '../actions'

const initialState = {
    products: []
};

const cases = {};

cases[GET_PRODUCTS] = (state, payload) => ({ ...state, products: payload });

export default function reducer(state = initialState, { type, payload }) {
  return cases[type] ? cases[type](state, payload) : state;
}
