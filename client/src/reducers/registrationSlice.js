import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: {
    name: "",
    email: "",
    number: "",
  },
  password: {
    password: "",
    confirmPass: "",
  },
  address: {
    district: "",
    subDist: "",
    village: "",
    address: "",
  },
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      const { name, email, number } = action.payload;

      state.details = {
        name,
        email,
        number,
      };
    },
    setPasswords: (state, action) => {
      const { password, confirmPass } = action.payload;

      state.password = {
        password,
        confirmPass,
      };
    },
    setAddresss: (state, action) => {
      const { district, subDist, village, address } = action.payload;
      state.address = {
        district,
        subDist,
        village,
        address,
      };
    },
  },
});

export const { setAddresss, setDetails, setPasswords } =
  registrationSlice.actions;
export default registrationSlice.reducer;
