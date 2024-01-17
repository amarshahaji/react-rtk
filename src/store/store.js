import { configureStore } from '@reduxjs/toolkit';
import cityReducer from '../Component/City/CitySlice';

const store = configureStore({
    reducer: {
        city: cityReducer
    },
});

export default store;
