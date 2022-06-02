import React, {useState} from 'react';
import style from './CreateTodoModal.module.scss'
import styleTpl from "../../styles/templates.module.scss";
import {ITodo} from "../../store/models/ITodo";
import {nanoid} from "nanoid";
import {TodosService} from "../../services/TodosService";
import {useAppDispatch} from "../../store/hooks/redux";
import {changeModalWindowState} from '../../store/reducers/ActionCreators'

const CreateTodoModal = () => {
    const dispatch = useAppDispatch();
    const [changeForm, setChangeForm] = useState<ITodo>({
        id: nanoid(),
        userId: Math.floor(100 + Math.random() * (9999 + 1 - 100)),
        title: '',
        text: '',
        completed: false
    });
    const [createTodo, {}] = TodosService.useCreateTodoMutation();

    const handleChange = (e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.currentTarget
        setChangeForm({
            ...changeForm,
            [name]: value,
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await createTodo(changeForm)
        dispatch(changeModalWindowState(false,'create'))
    }

    return (
      <div className={style['create-todo-modal']}>
          <form onSubmit={handleSubmit}>
              <div className={style['input-container']}>
                  <label htmlFor="title-input">Title</label>
                  <input id="title-input"
                         name='title'
                         onChange={handleChange}
                         value={changeForm.title}
                         type="text"
                         className={style.input}
                  />
              </div>
              <div className={style['input-container']}>
                  <label htmlFor="text-input">Description</label>
                  <textarea name="text"
                            id="text-input"
                            placeholder='Enter the text'
                            className={style['description-input']}
                            onChange={handleChange}
                  />
              </div>
                  <button className={styleTpl['btn-middle']} type='submit'>Create todo</button>
          </form>
      </div>
    );
};

export default CreateTodoModal;
