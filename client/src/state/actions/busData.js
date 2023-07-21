import actionTypes from "../../constants/actionTypes";

// const setBusData = (dispatch,a) => {
//     return dispatch({
//       type: actionTypes.SET_BUSDATA,
//       payload: a,
//     })
//   }

export const setBusData = (dispatch,a) => {
    return dispatch({
        type: actionTypes.SET_BUSDATA,
        payload: a,
      });
    };
  
//   export { setBusData }