// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navigation from './pages/Navigation'
import PageNavigation from './pages/PageEvenement'
import CreationEvenement from './pages/CreationEvenement'
import SingleEvent from './pages/SingleEvent'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navigation/>
      <Routes>     
        <Route path='/' element={ <PageNavigation/> }/>
        <Route path='/creation-event' element={ <CreationEvenement/> }/>
        <Route path='/single-event' element={ <SingleEvent/> }/>
      </Routes>
    </>
  )
}

export default App
