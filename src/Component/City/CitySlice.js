import { createSlice } from '@reduxjs/toolkit';

export const citySlice = createSlice({
    name: "city",
    initialState: [],
    reducers: {
        addCity: (state, action) => {
            state.push(action.payload);
         },
        deleteCity: (state, action) => {
            state.splice(action.payload, 1);
        },
        clearAllCity: () => { 
            return []
        }
    },
});

export const { addCity, deleteCity, clearAllCity } = citySlice.actions;

export default citySlice.reducer;

