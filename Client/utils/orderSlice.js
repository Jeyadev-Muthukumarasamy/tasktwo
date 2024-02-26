import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name:'orders',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        }

    }
})


export const {addItem} =orderSlice.actions;
export default orderSlice.reducer;