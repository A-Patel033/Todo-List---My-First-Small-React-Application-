import Header from './MyComponents/Header'
import { Todos } from './MyComponents/Todos'
// import {TodoItems} from './MyComponents/TodoItems'
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo'
import React, { useState, useEffect } from 'react';
import { About } from "./MyComponents/About";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete.", todo)

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding Todo", title, desc)
    let sno = todos.length + 1;
    const myNewTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myNewTodo])
  }

  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <> 
    <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
  );
}

export default App;
