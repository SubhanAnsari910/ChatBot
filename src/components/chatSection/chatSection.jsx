import React, { useContext } from 'react'
import "./chatSection.css"
import Darkmode from '../Darkmode/Darkmode'
import { LuSendHorizonal } from 'react-icons/lu'
import { dataContext } from '../../context/UserContext'
import user from '../../assets/user.png'
import ai from '../../assets/ai.png'

const chatSection = () => {

  let {sent, input, setInput, showResult, resultData, recentPrompt, loading} = useContext(dataContext)

  return (
    <div className="chatSection">
        <div className="topSection">
          {!showResult ? 
          <div className="headings">
            <span>HELLO SUBHAN,</span>
            <span>I'm Your Own Assistant</span>
            <span>What Can I help you...??</span>
          </div>
        :
        <div className="result">
          <div className="userBox">
            <img src={user} alt='' width='60px' />
            <p>{recentPrompt}</p>
          </div>
          <div className="aiBox">
            <img src={ai} alt='' width='60px' />
            {
            loading ? 
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
              :
              <p>{resultData}</p>
            }
          </div>
        </div>
        }
        </div>
        <div className="bottomSection">
          <input onChange={(e) => {
            setInput(e.target.value)
          }} type='text' placeholder='Enter a prompt' value={input} />
          {
            input ?           
            <button id='sentbtn' onClick={() => {
              sent(input)
            }}><LuSendHorizonal /></button>
            :
            null
          }
          <Darkmode />
        </div>
    </div>
  )
}

export default chatSection
