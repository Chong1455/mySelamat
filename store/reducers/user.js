import { SET_USER, CREATE_USER } from "../actions/user";
import User from "../../models/user";

const initialState = {
  myUser: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        myUser: action.user,
      };
    case CREATE_USER:
      return {
        myUser: action.user,
      };
  }
  return state;
};
