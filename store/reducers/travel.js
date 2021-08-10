import { CREATE_TRAVEL, SET_TRAVEL } from "../actions/travel";
import Travel from "../../models/travel";

const initialState = {
  travelList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TRAVEL:
      return {
        travelList: action.travels,
      };
    case CREATE_TRAVEL:
      const newTravel = new Travel(
        action.travelData.id,
        action.travelData.location,
        action.travelData.name,
        action.travelData.phone,
        action.travelData.date,
        action.travelData.time
      );
      return {
        ...state,
        travelList: state.travelList.concat(newTravel),
      };
  }
  return state;
};
