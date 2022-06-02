import {AppDispatch} from "../store";
import axios from "axios";
import {ITodo} from "../models/ITodo";
import {todoSlice} from './TodoSlice'
import {createAsyncThunk} from "@reduxjs/toolkit";


// 1
// export const fetchTodos = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(todoSlice.actions.todosFetching())
//         const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
//         dispatch(todoSlice.actions.todosFetchingSuccess(response.data))
//     }catch (e) {
//         dispatch(todoSlice.actions.todosFetchingError('ошибка'))
//     }
// }


// 2
// export const fetchTodos = createAsyncThunk(
//   'todos/fetchAll', async (_, thunkApi) => {
//       try {
//           const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
//           return response.data
//       }catch (e) {
//           return thunkApi.rejectWithValue('Не удалось')
//       }
//   }
// )
export const fitlerTodos = (filter:string) => (dispatch: AppDispatch) => {
    try {
        dispatch(todoSlice.actions.changeFilter(filter))
    }catch (e) {
        dispatch(todoSlice.actions.changeError('ошибка'))
    }
}

export const changeModalWindowState = (modalState:boolean, modal:string) => (dispatch: AppDispatch) => {
    try {
        switch (modal) {
            case 'change' :
                dispatch(todoSlice.actions.isOpenModalChangeTodo(modalState))
                break;
            case 'create' :
                dispatch(todoSlice.actions.isOpenModalCreateTodo(modalState))
                break;
            default:
                dispatch(todoSlice.actions.changeError('switch error'))
        }
    }catch (e) {
        dispatch(todoSlice.actions.changeError('ошибка'))
    }
}