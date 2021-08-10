import { UPDATE_STATUS, GET_STATUS } from "../actions/status";

const initialState = {
  myStatus: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STATUS:
      return {
        myStatus: action.risk,
      };
    case UPDATE_STATUS:
      return {
        myStatus: action.risk,
      };
  }
  return state;
};
