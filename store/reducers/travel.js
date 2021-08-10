import TRAVELS from "../../data/dummy-data";
import { CREATE_TRAVEL } from "../actions/travel";
import Travel from "../../models/travel";

const initialState = {
  travelList: TRAVELS,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TRAVEL:
      const newTravel = new Travel(
        new Date().toString(),
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
