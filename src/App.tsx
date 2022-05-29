import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./store/hooks/redux";
import {todoSlice} from "./store/reducers/TodoSlice";
import {fetchTodos} from "./store/reducers/ActionCreators";

function App() {
  const dispatch = useAppDispatch()
  const {todos, isLoading, error} = useAppSelector(state => state.todoReducer)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [ ]);

  return (
    <div className="App">

    </div>
  );
}

export default App;
