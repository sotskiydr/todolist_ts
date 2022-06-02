import React from 'react';
import TodosList from "./components/TodosView/TodosList/TodosList";
import Container from './components/Container/Container'
import './App.css';

function App() {

  return (
    <Container>
        <TodosList />
    </Container>
  );
}

export default App;
