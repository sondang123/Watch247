const MyFavouriteReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_DATA_MYFAVOURITE": {
      const data = [...state, action.payload];
      return data;
    }
    default: {
      return state;
    }
  }
};

export default MyFavouriteReducer;
