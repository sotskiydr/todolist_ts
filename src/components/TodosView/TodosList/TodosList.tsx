import React,{useState} from 'react';
import {TodosService} from "../../../services/TodosService";
import TodosItem from "../TodosItem/TodosItem";
import ModalWindow from "../../ModalWindow/ModalWindow";
import style from './TodosList.module.scss'
import styleTpl from '../../../styles/templates.module.scss'
import {useAppSelector, useAppDispatch} from "../../../store/hooks/redux";
import {changeModalWindowState} from '../../../store/reducers/ActionCreators'
import {ITodo} from "../../../store/models/ITodo";
import ChangeTodoModal from "../../ChangeTodoModal/ChangeTodoModal";
import CreateTodoModal from "../../CreateTodoModal/CreateTodoModal";

const TodosList = () => {
    const [currentTodo, setCurrentTodo] = useState<ITodo>({
        userId: 0,
        id: '',
        title: '',
        completed: false,
        text: ''
    });
    const dispatch = useAppDispatch()
    const {
        isOpenModalChangeTodo,
        isOpenModalCreateTodo
    } = useAppSelector(state => state.TodoSlice);

    const {data: todos, isLoading, error} = TodosService.useFetchAllTodosQuery('');
    // dispatch(fitlerTodos('string'))

    const createTodo = () => {
        dispatch(changeModalWindowState(true, 'create'))
    }

    const changeTodo = (todo: ITodo) => {
        setCurrentTodo(todo)
        dispatch(changeModalWindowState(true, 'change'))
    }

    return (
      <>
          {isOpenModalChangeTodo && (
            <ModalWindow action='change'>
                <ChangeTodoModal {...currentTodo}/>
            </ModalWindow>
          )}
          {isOpenModalCreateTodo && (
            <ModalWindow action='create'>
                <CreateTodoModal />
            </ModalWindow>
          )}
          <button
            onClick={createTodo}
            className={`${style['create-todo__btn']}
             ${styleTpl['btn-big']} `}>
              Add todo
          </button>

          <ul className={style["todo-list"]}>
              {todos && todos.map(todo => {
                  return <TodosItem key={todo.id} {...todo} onChangeTodo={changeTodo} />
              })}
          </ul>
      </>
    );
};

export default TodosList;
