// const initialState = {};

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOG_IN": {
      const newUser = { ...state, user: action.payload };
      // console.log(action.payload);
      return newUser;
    }
    case "LOG_OUT": {
      const newUser = {};
      return newUser;
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
