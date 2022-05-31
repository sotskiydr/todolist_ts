import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TodosService} from '../services/TodosService'
import TodoSlice from "./reducers/TodoSlice";

const rootReducer = combineReducers({
    [TodosService.reducerPath]: TodosService.reducer,
    TodoSlice
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