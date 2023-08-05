import { TYPE } from "./action";
// import data from "./sampleData";

const INITIAL_STATE = {
  busDetails: {},
  addedSeats: [],
  selectedBus: {},
  busInformation: [],
  payment: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === TYPE.busDetails) {
    return {
      ...state,
      busDetails: action.payload,
    };
  } else if (action.type === TYPE.busInformation) {
    return {
      ...state,
      busInformation: action.payload,
    };
  } else if (action.type === TYPE.addSeats) {
    const seatIncluded = state.selectedBus.seletedSeats.some(
      (el, i) => el.seatNumber === action.payload.seatNumber
    );

    if (!seatIncluded) {
      const bus = {
        ...state.selectedBus,
      };
      bus.seletedSeats = [action.payload, ...bus.seletedSeats];
      return {
        ...state,
        selectedBus: bus,
      };
    }
  } else if (action.type === TYPE.selectBus) {
    return {
      ...state,
      selectedBus: action.payload,
    };
  } else if (action.type === TYPE.userDetails) {
    const details = {
      ...state.selectedBus,
      userDetails: action.payload,
    };

    return {
      ...state,
      selectedBus: details,
    };
  } else if (action.type === TYPE.paymentSuccesful) {
    return {
      ...state,
      payment: action.payload,
    };
  } else if (action.type === TYPE.unavailable_seats) {
    const selectedBus = state.selectedBus;

    action.payload.forEach((el, i) => {
      const seatNumber = el.seatNumber;
      selectedBus.seats.forEach((seat, i) => {
        if (seat.seatNumber === seatNumber) {
          seat.isAvailable = false;
        }
      });
    });

    return {
      ...state,
      selectedBus: selectedBus,
    };
  }

  return state;
};

export default reducer;
