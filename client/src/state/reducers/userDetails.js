import actionTypes from "../../constants/actionTypes";

const INIT_STATE = [];

const userDetailsReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case actionTypes.SET_USER_DETAILS:
        return {
          ...state,
          INIT_STATE: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default userDetailsReducer;