const AppointmentReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_DATA_APPOINTMENT": {
      const data = [...state, action.payload];
      return data;
    }
    default: {
      return state;
    }
  }
};

export default AppointmentReducer;
