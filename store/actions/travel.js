export const CREATE_TRAVEL = "CREATE_TRAVEL";

export const createTravel = (location, name, phone, date, time) => {
  return {
    type: CREATE_TRAVEL,
    travelData: {
      location,
      name,
      phone,
      date,
      time,
    },
  };
};
