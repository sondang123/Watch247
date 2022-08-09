const BuyReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_DATA_BUY": {
      const data = [...state, action.payload];
      return data;
    }
    case "DELETE_DATA_BUY": {
      const data = action.payload;
      return data;
    }
    default: {
      return state;
    }
  }
};

export default BuyReducer;
