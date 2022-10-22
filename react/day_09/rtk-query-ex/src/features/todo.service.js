// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "/todos",
        }),
        createTodo: builder.mutation({
            query: (data) => ({
                url: "/todos",
                method: "POST",
                body: data,
            }),
        }),
        updateTodo: builder.mutation({
            query: (data) => ({
                url: `/todos/${data.id}`,
                method: "PUT",
                body: data,
            }),
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: "DELETE",
            }),
        }),
        transformResponse: (arg) => {
            return arg
        }
    }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetTodosQuery, useCreateTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = todoApi