import { LOAD_CART_ITEMS, ADD_CART_ITEM, REMOVE_CART_ITEM } from "./types";

export const loadCartItems = () => {
  return {
    type: LOAD_CART_ITEMS
  };
};

export const addCartItem = item => {
  return {
    type: ADD_CART_ITEM,
    payload: item
  };
};

export const removeCartItem = item => {
  return {
    type: REMOVE_CART_ITEM,
    payload: item
  };
};
