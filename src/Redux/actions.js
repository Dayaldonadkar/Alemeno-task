import course from "../Course.json";
export const fetchLocalData = () => async (dispatch) => {
  try {
    const data = course;

    dispatch({ type: "FETCH_LOCAL_DATA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_LOCAL_DATA_FAILURE", payload: error.message });
  }
};
