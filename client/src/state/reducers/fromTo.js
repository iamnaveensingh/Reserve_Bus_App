import actionTypes from "../../constants/actionTypes";

const INIT_STATE = [];

const fromToReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case actionTypes.SET_FROM_TO:
        return {
          ...state,
          INIT_STATE: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default fromToReducer;