import React, { useContext } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import ChatSection from './components/chatSection/chatSection'
import Seperation from './components/seperation/Seperation'

const App = () => {
  return (
    <>
      <Sidebar />
      <Seperation />
      <ChatSection />
    </>
  )
}

export default App