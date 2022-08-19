const MessageReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_DATA_MESSAGE": {
      const data = [...state, action.payload];

      return data;
    }

    default: {
      return state;
    }
  }
};

export default MessageReducer;
