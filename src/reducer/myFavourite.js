const MyFavouriteReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_DATA_MYFAVOURITE": {
      // const data = [...state, action.payload];
      const data = action.payload;

      return data;
    }
    case "UPDATE_DATA_MYFAVOURITE": {
      const data = action.payload;
      // const data = action.payload;

      return data;
    }
    default: {
      return state;
    }
  }
};

export default MyFavouriteReducer;
