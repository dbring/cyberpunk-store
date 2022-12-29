import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  if (type === USER_ACTION_TYPES.SET_CURRENT_USER) {
    return {
      ...state,
      currentUser: payload,
    };
  }

  return state;
};
