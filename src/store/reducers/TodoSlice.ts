import {ITodo} from "../models/ITodo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TodoSlice {
    todos: ITodo[];
    isLoading: boolean;
    error: string;
    filter: string;
    isOpenModalChangeTodo: boolean;
    isOpenModalCreateTodo: boolean;
}

const initialState:TodoSlice = {
    todos: [],
    isLoading: false,
    error: '',
    filter: '',
    isOpenModalChangeTodo: false,
    isOpenModalCreateTodo: false,
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
        },
        isOpenModalChangeTodo(state, action: PayloadAction<boolean>){
            state.isOpenModalChangeTodo = action.payload
        },
        isOpenModalCreateTodo(state, action: PayloadAction<boolean>){
            state.isOpenModalCreateTodo = action.payload
        }
    }
})

export default todoSlice.reducer