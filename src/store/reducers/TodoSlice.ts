import {ITodo} from "../models/ITodo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TodoSlice {
    todos: ITodo[];
    isLoading: boolean;
    error: string;
    filter: string;
}

const initialState:TodoSlice = {
    todos: [],
    isLoading: false,
    error: '',
    filter: ''
}

export const todoSlice = createSlice({
    name: 'todoState',
    initialState,
    reducers: {
        changeFilter(state, action: PayloadAction<string>){
            state.filter = action.payload
        },
        changeError(state, action: PayloadAction<string>){
            state.error = action.payload
        }
    }
})

export default todoSlice.reducer