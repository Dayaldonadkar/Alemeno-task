const initialState = {
  localData: null,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LOCAL_DATA_SUCCESS":
      return { ...state, localData: action.payload, error: null };

    case "FETCH_LOCAL_DATA_FAILURE":
      return { ...state, localData: null, error: action.payload };

    default:
      return state;
  }
};

export default rootReducer;
