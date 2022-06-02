import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ITodo} from "../store/models/ITodo";

export const TodosService = createApi({
    reducerPath: 'TodosAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://6293a313089f87a57ac3acbe.mockapi.io`
    }),
    tagTypes: ['PostTodo'],
    endpoints: builder => ({
        fetchAllTodos: builder.query<ITodo[], string>({
            query: () => ({
                url: `/todos/todoslist`
            }),
            providesTags: result => ['PostTodo']
        }),
        createTodo: builder.mutation<ITodo, ITodo>({
            query: (todo) => ({
                url: `/todos/todoslist`,
                method: 'POST',
                body: todo
            }),
            invalidatesTags: ['PostTodo']
        }),
        updateTodo: builder.mutation<ITodo, ITodo>({
            query: (changes) => ({
                url: `/todos/todoslist/${changes.id}`,
                method: 'PUT',
                body: changes
            }),
            invalidatesTags: ['PostTodo']
        }),
        deleteTodo: builder.mutation<ITodo, string>({
            query: (id) => ({
                url: `/todos/todoslist/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['PostTodo']
        })
    })
})