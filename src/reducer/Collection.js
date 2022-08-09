const CollectionReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_DATA_COLLECTION": {
      const data = [...state, action.payload];
      return data;
    }
    case "DELETE_DATA_COLLECTION": {
      const data = action.payload;
      return data;
    }
    default: {
      return state;
    }
  }
};

export default CollectionReducer;
