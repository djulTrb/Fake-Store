import { createSlice, configureStore } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  searchValue: "",
  categoryDisplay: "",
  cart: [],
  wishlist: [],
};

const StoreSlice = createSlice({
  name: "commerce",
  initialState: initialState,
  reducers: {
    retrieveData: (state, action) => {
      state.data = [...action.payload];
    },
    filterSearch: (state, action) => {
      state.searchValue = action.payload;
    },
    filterCategory: (state, action) => {
      state.categoryDisplay = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    retrieveFromLocalCart: (state, action) => {
      state.cart = [...action.payload];
    },
    removeFromCart: (state, action) => {
      state.cart = [...action.payload];
    },
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    retrieveFromLocalWishlist: (state, action) => {
      state.wishlist = [...action.payload];
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = [...action.payload];
    },
  },
});

export const { filterSearch, filterCategory } = StoreSlice.actions;

export function retrieveData() {
  return async (dispatch) => {
    try {
      const getData = await axios.get("https://dummyjson.com/products");
      dispatch({
        type: "commerce/retrieveData",
        payload: getData.data.products,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function retrieveFromLocalCart(cartProducts) {
  return async (dispatch) => {
    dispatch({
      type: "commerce/retrieveFromLocalCart",
      payload: cartProducts,
    });
  };
}

export function retrieveFromLocalWishlist(wishlistProducts) {
  return async (dispatch) => {
    dispatch({
      type: "commerce/retrieveFromLocalWishlist",
      payload: wishlistProducts,
    });
  };
}

const store = configureStore({
  reducer: {
    commerce: StoreSlice.reducer,
  },
});

export default store;
