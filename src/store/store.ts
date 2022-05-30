import {combineReducers, configureStore} from "@reduxjs/toolkit";
import todoReducer from './reducers/TodoSlice'
import {TodosService} from '../services/TodosService'

const rootReducer = combineReducers({
    todoReducer,
    [TodosService.reducerPath]: TodosService.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(TodosService.middleware)

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]