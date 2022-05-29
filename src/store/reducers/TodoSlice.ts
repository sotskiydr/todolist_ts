import {ITodo} from "../models/ITodo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchTodos} from "./ActionCreators";

interface TodoSlice {
    todos: ITodo[];
    isLoading: boolean;
    error: string;
}

const initialState:TodoSlice = {
    todos: [],
    isLoading: false,
    error: '',
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // 1
        // todosFetching(state){
        //     state.isLoading = true
        // },
        // todosFetchingSuccess(state, action: PayloadAction<ITodo[]>){
        //     state.isLoading = false;
        //     state.error = '';
        //     state.todos = action.payload;
        // },
        // todosFetchingError(state, action: PayloadAction<string>){
        //     state.isLoading = false;
        //     state.error = action.payload
        // }
    }, // 2
    extraReducers: {
        [fetchTodos.fulfilled.type]: (state, action: PayloadAction<ITodo[]>) => {
            state.isLoading = false;
            state.error = '';
            state.todos = action.payload;
        },
        [fetchTodos.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchTodos.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export default todoSlice.reducer