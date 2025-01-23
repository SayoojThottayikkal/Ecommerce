const Reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CART_DATA":
      return {
        ...state,
        cart_data: {
          ...state.cart_data,
          cartItems: [
            ...state.cart_data.cartItems,
            ...action.cart_data.cartItems,
          ],
        },
      };
    default:
      return state;
  }
};

export default Reducer;
