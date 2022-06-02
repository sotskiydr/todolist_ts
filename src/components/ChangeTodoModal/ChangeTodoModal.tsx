import React,{useState} from 'react';
import style from './ChangeTodoModal.module.scss'
import styleTpl from '../../styles/templates.module.scss'
import {ITodo} from "../../store/models/ITodo";
import {TodosService} from "../../services/TodosService";
import {useAppDispatch} from "../../store/hooks/redux";
import {changeModalWindowState} from '../../store/reducers/ActionCreators'

const ChangeTodoModal = (todo: ITodo) => {
    const dispatch = useAppDispatch();
    const [changeForm, setChangeForm] = useState<ITodo>(todo);
    const [updateTodo, {}] = TodosService.useUpdateTodoMutation();

    const handleChange = (e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.currentTarget
        let isCompleted = changeForm.completed;
        if(name === 'completed') {
            isCompleted = !isCompleted
        }

        setChangeForm({
            ...changeForm,
            [name]: value,
            completed: isCompleted
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await updateTodo(changeForm)
        dispatch(changeModalWindowState(false,'change'))
    }

    return (
      <div className={style['change-modal']}>
          <form onSubmit={handleSubmit}>
              <div className={style['input-container']}>
                  <label htmlFor="title-input">Change title</label>
                  <input id="title-input"
                         name='title'
                         onChange={handleChange}
                         value={changeForm.title}
                         type="text"
                         className={style.input}
                  />
              </div>
              <div className={style['input-container']}>
                  <label htmlFor="text-input">Change description</label>
                  <textarea name="text"
                            id="text-input"
                            defaultValue={changeForm.text}
                            className={style['description-input']}
                            onChange={handleChange}
                  />
              </div>
              <div className={style['input-container']}>
                  <label htmlFor="complete-input">Change complete</label>
                  <input id='complete-input'
                         name='completed'
                         onChange={handleChange}
                         defaultChecked={changeForm.completed}
                         type="checkbox"
                         className={style['checkbox-input']}
                  />
                  <button className={styleTpl['btn-middle']} type='submit'>Change todo</button>
              </div>
          </form>
      </div>
    );
};

export default ChangeTodoModal;
