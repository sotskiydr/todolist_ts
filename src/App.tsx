import React from 'react';
import './App.css';
// import {useAppDispatch, useAppSelector} from "./store/hooks/redux";
// import {todoSlice} from "./store/reducers/TodoSlice";
// import {fetchTodos} from "./store/reducers/ActionCreators";
import TodosContainer from "./components/TodosContainer";

function App() {
  // const dispatch = useAppDispatch()
  // const {todos, isLoading, error} = useAppSelector(state => state.todoReducer)
  //
  // useEffect(() => {
  //   dispatch(fetchTodos())
  // }, [ ]);

  return (
    <div className="App">
      <TodosContainer />
    </div>
  );
}

export default App;
