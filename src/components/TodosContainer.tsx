import React from 'react';
import {TodosService} from "../services/TodosService";
import {ITodo} from "../store/models/ITodo";

interface ITodosItem {
    todo: ITodo;
    remove: (todo: ITodo) => void;
    update: (todo: ITodo) => void;
}

const TodosContainer = () => {
    const {data: todos, isLoading, error} = TodosService.useFetchAllTodosQuery('');
    const [updateTodo, {}] = TodosService.useUpdateTodoMutation();
    const [deleteTodo, {}] = TodosService.useDeleteTodoMutation();
    const [createTodo, {}] = TodosService.useCreateTodoMutation();
    const handleCreate = async () => {
        const newTodo: ITodo = {
            id: Math.floor(1 + Math.random() * (999 + 1 - 1)),
            title: 'Other',
            completed: false,
            userId: Math.floor(1 + Math.random() * (999 + 1 - 1))
        }
        await createTodo(newTodo)
    }
    const handleDeleteTodo = async () => {
        if(todos){
            const lastElement = todos[todos.length-1].id
            await deleteTodo(lastElement)
        }
    }
    const handleUpdateTodo = async () => {
        if(todos){
            const lastElement = todos[todos.length-1]
            const title: ITodo  = {...lastElement, title: 'Zalupa'}
            await updateTodo(title)
        }
    }
    return (
      <ul className='todos-list'>
          {isLoading && <h1>Загрузка</h1>}
          {error && <h1>Ошибка</h1>}
          {todos && todos.map(todo => {
              return <li>{todo.title}</li>
          })}
          <button onClick={handleCreate}>create todo</button>
          <button onClick={handleDeleteTodo}>delete last todo</button>
          <button onClick={handleUpdateTodo}>update last todo</button>
      </ul>
    );
};

export default TodosContainer;
