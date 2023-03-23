import { configureStore } from "@reduxjs/toolkit";
import {
  addCar,
  carsReducer,
  removeCar,
  changeSearchTerm,
} from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, changeCost, changeName, addCar, removeCar, changeSearchTerm };
