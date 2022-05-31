import React from 'react';
import style from './TodosItem.module.scss'
import {ITodo} from "../../../store/models/ITodo";

const TodosItem = ({id, userId, title, text, completed}: ITodo) => {
    return (
      <li className={style['todo-item']}>
        <h3 className={style.title}>{title}</h3>
          <p className={style.description}>{text}</p>
          {completed && <span>{completed}</span>}
      </li>
    );
};

export default TodosItem;
