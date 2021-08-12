import User from "../../models/user";

export const SET_USER = "SET_USER";
export const CREATE_USER = "CREATE_USER";

export const fetchUser = () => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await fetch(
      `https://myselamat-e56db-default-rtdb.firebaseio.com/${userId}.json`
    );

    const resData = await response.json();
    const loadedUser = [];
    for (const key in resData) {
      loadedUser.push(
        new User(resData[key].name, resData[key].age, resData[key].address)
      );
      break;
    }
    dispatch({ type: SET_USER, user: loadedUser });
  };
};

export const createUser = (name, age, address) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await fetch(
      `https://myselamat-e56db-default-rtdb.firebaseio.com/${userId}.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
          address,
        }),
      }
    );

    const resData = await response.json();

    dispatch({
      type: CREATE_USER,
      userData: {
        name,
        age,
        address,
      },
    });
  };
};
