import React from 'react'
import Header from './components/Header'
import LeftSidebar from './components/LeftSidebar'
import MainContent from './components/MainContent'
import RightSidebar from './components/RightSidebar'

function App() {
  return (
    <>
      <Header />
      <div className="layout">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </>
  )
}

export default App
