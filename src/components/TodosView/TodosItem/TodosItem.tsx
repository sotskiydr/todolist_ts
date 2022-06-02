import React from 'react';
import style from './TodosItem.module.scss'
import styleTpl from '../../../styles/templates.module.scss'
import {ITodo} from "../../../store/models/ITodo";
import changeBtnLogo from '../../../svg/changeBtnSvg.svg'

import {TodosService} from "../../../services/TodosService";

interface IProps {
    userId: number;
    id: string;
    title: string;
    completed: boolean;
    text: string;
    onChangeTodo: (todo:ITodo) => void;
}


const TodosItem = ({id, userId, title, text, completed, onChangeTodo: changeTodo}: IProps) => {
    const [deleteTodo, {}] = TodosService.useDeleteTodoMutation()
    const [updateTodo, {}] = TodosService.useUpdateTodoMutation()

    const handleDeleteTodo = async () => {
        await deleteTodo(id)
    }
    const handleUpdateTodo = async () => {
        const todo: ITodo = {
            id,
            userId,
            title,
            text,
            completed: true
        }
        await updateTodo(todo)
    }
    return (
      <>
          <li className={style['todo-item']}>
              {
                  completed ?
                    <h3 className={style.title} style={{textDecoration: 'line-through'}}>{title}</h3> :
                    <h3 className={style.title}>{title}</h3>
              }

              <p className={style.description}>{text}</p>
              <div className={style['option-container']}>
                  <button
                    onClick={handleDeleteTodo}
                    className={styleTpl.btn
                    }>Delete</button>
                  <svg
                    className={style['change-btn']}
                    onClick={() => {
                        changeTodo({id, userId, title, text, completed})
                    }}
                    width='30' height='30'>
                      <use href={`${changeBtnLogo}#changeBtnSvg`}></use>
                  </svg>
                  {
                      completed ? <span className={style.completed}>Completed</span> :
                        <button
                          onClick={handleUpdateTodo}
                          className={styleTpl.btn}
                        >Completed</button>
                  }
              </div>
          </li>
      </>
    );
};

export default TodosItem;
