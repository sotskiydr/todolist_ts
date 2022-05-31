import React from 'react';
import {TodosService} from "../../../services/TodosService";
import {ITodo} from "../../../store/models/ITodo";
import TodosItem from "../TodosItem/TodosItem";
import style from './TodosList.module.scss'
import {useAppDispatch} from "../../../store/hooks/redux";
import {todoSlice} from "../../../store/reducers/TodoSlice";
import {fitlerTodos} from "../../../store/reducers/ActionCreators";

const MyComponent = () => {
    const dispatch = useAppDispatch()
    const {data: todos, isLoading, error} = TodosService.useFetchAllTodosQuery('');
    // dispatch(fitlerTodos('string'))

    return (
      <ul className={style["todo-list"]}>
          {todos && todos.map(todo => {
              return <TodosItem key={todo.id} {...todo} />
          })}
      </ul>
    );
};

export default MyComponent;
