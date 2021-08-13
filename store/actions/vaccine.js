export const CREATE_VACCINE = "CREATE_VACCINE";
export const GET_VACCINE = "GET_VACCINE";

export const createVaccine = (vaccine) => {
  return async (dispatch, getState) => {
    // console.log(getState());
    const userId = getState().auth.userId;
    const response = await fetch(
      `https://myselamat-e56db-default-rtdb.firebaseio.com/${userId}/vaccine.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vaccine,
        }),
      }
    );

    const resData = await response.json();

    dispatch({
      type: CREATE_VACCINE,
      vaccine,
    });
  };
};

export const getVaccine = () => {
  return async (dispatch, getState) => {
    // console.log(getState());
    const userId = getState().auth.userId;
    const response = await fetch(
      `https://myselamat-e56db-default-rtdb.firebaseio.com/${userId}/vaccine.json`
    );
    const resData = await response.json();
    var vaccine = "no";
    for (const key in resData) {
      vaccine = resData[key].vaccine;
    }
    dispatch({
      type: GET_VACCINE,
      vaccine,
    });
  };
};
