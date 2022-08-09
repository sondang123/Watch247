const CartReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_DATA_CART": {
      const data = [...state, action.payload];

      return data;
    }
    default: {
      return state;
    }
  }
};

export default CartReducer;
