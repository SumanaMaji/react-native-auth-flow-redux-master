import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    isLoggedIn: false,
    email: null,
    userName: null
}
const getAllData = createAsyncThunk("getTrips", async () =>{
    const response = await fetch("https://travel-api-lous.onrender.com/api/v1/admin/trip");
    const result = response.json();
    return result;
})

const fetchData = createSlice({
    name: 'getTrips',
    initialState: {
        trips:[],
        loading:false,
        error : null,
    },
    reducers: {},
    extraReducers: {
      [getAllData.pending]: (state) => {
        state.loading = true;
      },
      [getAllData.fulfilled]: (state, action) => {
        state.loading = false;
        state.trips = action.payload.data;
      },
      [getAllData.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    }
});
//export const { setSignIn, setSignOut } = fetchData.actions;

export default fetchData.reducer;