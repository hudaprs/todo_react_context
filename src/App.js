import React from "react"

// Styles
import "./style.css"

// Components
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

// State
import TodoState from "./context/TodoState"

const App = () => {
  return (
    // Wrap entire app with State
    <TodoState>
      <div className='container flex flex-col mt-4'>
        <h1 className='text-center'>Todo App With Context</h1>

        {/* Todo Form */}
        <TodoForm />

        {/* Todo List */}
        <div className='flex flex-col mt-4'>
          <TodoList />
        </div>
      </div>
    </TodoState>
  )
}

export default App
