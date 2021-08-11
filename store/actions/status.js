export const UPDATE_STATUS = "UPDATE_STATUS";
export const GET_STATUS = "GET_STATUS";

export const updateStatus = (risk) => {
  return async (dispatch, getState) => {
    // console.log(getState());
    const userId = getState().auth.userId;
    const response = await fetch(
      `https://myselamat-e56db-default-rtdb.firebaseio.com/status/${userId}.json`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          risk,
        }),
      }
    );

    const resData = await response.json();

    dispatch({
      type: UPDATE_STATUS,
      risk,
    });
  };
};

export const getStatus = () => {
  return async (dispatch, getState) => {
    // console.log(getState());
    const userId = getState().auth.userId;
    const response = await fetch(
      `https://myselamat-e56db-default-rtdb.firebaseio.com/status/${userId}.json`
    );
    const resData = await response.json();

    var updatedRisk;
    try {
      updatedRisk = resData.risk;
    } catch (err) {
      updatedRisk = "low";
    }

    dispatch({
      type: GET_STATUS,
      risk: updatedRisk,
    });
  };
};
