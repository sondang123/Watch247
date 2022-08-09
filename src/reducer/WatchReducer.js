const watchReduccer = (state = [], action) => {
  switch (action.type) {
    case "GET_DATA_WATCH": {
      const data = [...state, action.payload];
      return data;
    }
    default: {
      return state;
    }
  }
};

export default watchReduccer;
