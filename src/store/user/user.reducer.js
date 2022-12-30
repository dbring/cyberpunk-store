import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  if (type === USER_ACTION_TYPES.SIGN_IN_SUCCESS) {
    return {
      ...state,
      currentUser: payload,
    };
  } else if (type === USER_ACTION_TYPES.SIGN_OUT_SUCCESS) {
    return { ...state, currentUser: null };
  } else if (
    type === USER_ACTION_TYPES.SIGN_IN_FAIL ||
    type === USER_ACTION_TYPES.SIGN_UP_FAIL ||
    type === USER_ACTION_TYPES.SIGN_OUT_FAIL
  ) {
    return { ...state, error: payload };
  }

  return state;
};
