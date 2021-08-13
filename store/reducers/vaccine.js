import { CREATE_VACCINE, GET_VACCINE } from "../actions/vaccine";

const initialState = {
  myVaccine: "no",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_VACCINE:
      return {
        myVaccine: action.vaccine,
      };
    case CREATE_VACCINE:
      return {
        myVaccine: action.vaccine,
      };
  }
  return state;
};
