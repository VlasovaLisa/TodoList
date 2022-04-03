import React, {useEffect, useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import {checkTodo} from "../helpers/checkTodo";
import {TODO_HEADER_STRING} from "../constants/stringValuesConst";
import {DataService} from "../servises/data-servise";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    DataService.getTasks()
        .then(
            (result) => {
              setTodos(result);
            },
            (error) => {
              console.error(error);
            }
        )
  }, [])

  const addTodo = todo => {
    if (checkTodo(todo)) {
      return;
    }

    DataService.addTask(todo).then(
        (result) => {
          result.json().then((todo) => {
            addInState(todo);
          });
        },
        (error) => {
          console.error(error);
        }
    );
  };

  const updateTodo = (updatedTodo) => {
    if (checkTodo(updatedTodo)) {
      return;
    }
    DataService.updateTask(updatedTodo).then((res) => {
      if (res.status === 200) {
        updateInState(updatedTodo);
      }
    });
  };

  const removeTodo = id => {
    DataService.deleteTask(id).then(res => {
      if (res.status === 200) {
        removeInState(id);
      }
    })
  };

  const completeTodo = todo => {
    const updatedTodo = {...todo};
    updatedTodo.isComplete = !todo.isComplete;
    DataService.updateTask(updatedTodo).then((res) => {
      if (res.status === 200) {
        let updatedTodos = todos.map(i => {
          if (i.id === todo.id) {
            i.isComplete = updatedTodo.isComplete;
          }
          return i;
        });
        setTodos(updatedTodos);
      }
    });
  };

  const addInState = (todo) => {
    setTodos([...todos, todo]);
  }

  const updateInState = (todo) => {
    setTodos(prev => prev.map(item => (item.id === todo.id ? todo : item)));
  }

  const removeInState = (id) => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  }

  return (
    <>
      <h1>{TODO_HEADER_STRING}</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
