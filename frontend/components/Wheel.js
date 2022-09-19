import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { moveClockwise, moveCounterClocksise } from '../state/action-creators'
import * as actionCreators from '../state/action-creators'


export function Wheel(props) {
    

  useEffect(() => {
      console.log('Wheel Rendered')
    },[])

  // const handleClickRight = () => {
  //   props.moveClockwise()
  // }

  // const handleClickLeft = () => {
  //   props.moveCounterClockwise()
  // }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`cog${props.wheel === 0 ? ' active' : ''}`} style={{ "--i": 0 }}>{props.wheel === 0 ? 'B' : null}</div>
        <div className={`cog${props.wheel === 1 ? ' active' : ''}`} style={{ "--i": 1 }}>{props.wheel === 1 ? 'B' : null}</div>
        <div className={`cog${props.wheel === 2 ? ' active' : ''}`} style={{ "--i": 2 }}>{props.wheel === 2 ? 'B' : null}</div>
        <div className={`cog${props.wheel === 3 ? ' active' : ''}`} style={{ "--i": 3 }}>{props.wheel === 3 ? 'B' : null}</div>
        <div className={`cog${props.wheel === 4 ? ' active' : ''}`} style={{ "--i": 4 }}>{props.wheel === 4 ? 'B' : null}</div>
        <div className={`cog${props.wheel === 5 ? ' active' : ''}`} style={{ "--i": 5 }}>{props.wheel === 5 ? 'B' : null}</div>
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={props.moveCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={props.moveClockwise}>Clockwise</button>
      </div>
    </div>
  )
}



export default connect(st => st, actionCreators)(Wheel)