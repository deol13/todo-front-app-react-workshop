import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Form from './components/TodoForm'
import TodosBody from './components/TodosBody'
import Navbar from './components/Navbar'
import './App.css'
import { useTheme } from './components/ThemeContxt'

function App() {
    const { theme} = useTheme();

  return (
      <div className={`container-fluid row page-background-${theme} min-vh-100`}>
        <Navbar/>
        <div className="col-md-10 mt-3 pt-4 ps-4 pe-4 pb-2 ">
          <Header/>
          <TodosBody/>
        </div>
      </div>
  )
}

export default App
