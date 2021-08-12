import Travel from "../../models/travel";

export const CREATE_TRAVEL = "CREATE_TRAVEL";
export const SET_TRAVEL = "SET_TRAVEL";

export const fetchTravels = () => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await fetch(
      `https://myselamat-e56db-default-rtdb.firebaseio.com/${userId}/travel.json`
    );

    const resData = await response.json();
    console.log(resData);
    const loadedTravels = [];
    for (const key in resData) {
      loadedTravels.push(
        new Travel(
          key,
          resData[key].location,
          resData[key].name,
          resData[key].phone,
          resData[key].date,
          resData[key].time
        )
      );
    }
    dispatch({ type: SET_TRAVEL, travels: loadedTravels });
  };
};

export const createTravel = (location, name, phone, date, time) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await fetch(
      `https://myselamat-e56db-default-rtdb.firebaseio.com/${userId}/travel.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          location,
          name,
          phone,
          date,
          time,
        }),
      }
    );

    const resData = await response.json();

    dispatch({
      type: CREATE_TRAVEL,
      travelData: {
        id: resData.name,
        location,
        name,
        phone,
        date,
        time,
      },
    });
  };
};
