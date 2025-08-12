import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Form from './components/TodoForm'
import TodosBody from './components/TodosBody'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <>
    <div className="container-fluid row page-background">
      <Navbar/>
      <div className="container-fluid col mt-3 pt-4 ps-4 pe-4 pb-2 form-card-background">
        <Header/>
        <TodosBody/>
    </div>
    </div>
    </>
  )
}

export default App
