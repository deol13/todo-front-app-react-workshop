import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Form from './components/Form'
import Card from './components/Card'

function App() {

  return (
    <>
    <div className="container mt-3 pt-4 ps-4 pe-4 pb-2 text-bg-light">
      <Header/>
      
      <Card/>
    </div>
    </>
  )
}

export default App
