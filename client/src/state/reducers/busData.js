import actionTypes from "../../constants/actionTypes";



const busLocation = [];

// const busDataReducer = (state=busLocation, action) => {
//     console.log(busLocation)
//   switch (action.type) {
//     case actionTypes.SET_BUSDATA:
//       return  {
//         ...state,
//         busLocation: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default busDataReducer;

const busDataReducer = (state = busLocation, action) => {
    switch (action.type) {
      case actionTypes.SET_BUSDATA:
        return {
          ...state,
          busLocation: action.payload,
        };
  
      case actionTypes.SET_BUSDATA_ERROR:
        return state;
  
      default:
        return state;
    }
  };
  
  export default busDataReducer;