import React from 'react'
import '../Css/RadioComponent.css'

const RadioComponent = ({text, changeSelection, data}) => {

  const handlechecked = (val) => {
    changeSelection(val)
  }

  return (
    <div name={text} className= {`form_check_label ${data === text ? "active" : "inactive"}`} onClick={()=>{handlechecked(text)}}>
        <span className='text'>{text}</span>
    </div>
  )
}

export default RadioComponent