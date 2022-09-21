import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import axios from 'axios'

function Quiz(props) {
  
  const [loading, setLoading] = useState(true)

  const {question, answers, quiz_id} = props.quiz;

  const loadingString = 'Loading next quiz...'

  useEffect(()=>{
    if (!props.quiz){
      setLoading(true)
    props.fetchQuiz()
    setLoading(false)
    console.log(props)
  }
  }, [])


  const onSubmit = evt => {
    const onSubmit = evt => {
      evt.preventDefault()
      props.postAnswer()
    }
  }

  const handleSelect = (num) => {
    props.selectAnswer(num)
  }



  

  return (
    
    <div id="wrapper">
      { props.quiz ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`answer ${props.selectedAnswer === 1 ? 'selected' : 'answer'}`}>
             {props.quiz.answers[0].text}
                <button label={ props.selectedAnswer === 1 ? 'SELECTED' : 'Select'} onClick={()=>{handleSelect(1)}}>
                {props.selectedAnswer === 1 ? "SELECTED" : "Select"}
                </button>
              </div>

              <div className={`answer ${props.selectedAnswer === 2 ? 'selected' : 'answer'}`}>
              {props.quiz.answers[1].text}
                <button label={ props.selectedAnswer === 2 ? 'SELECTED' : 'Select'} onClick={()=>{handleSelect(2)}}>
                {props.selectedAnswer == 2 ? "SELECTED" : "Select"}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onSubmit={onSubmit} disabled={!props.selectedAnswer}>Submit answer</button>
          </>
        ) : loadingString  }
    </div>
  )
}

const mapStateToProps = (store) => {
  return store
}

export default connect(mapStateToProps, actionCreators)(Quiz)