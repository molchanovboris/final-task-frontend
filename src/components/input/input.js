import React from 'react'
import classes from './input.module.css';

function isInvalid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched
}

const Input = props => {
  const inputType = props.type || 'text'
  const cls = [classes.Input]
  const htmlFor = `${inputType}-${Math.random()}`

  if (isInvalid(props)) {
    cls.push(classes.isInvalid)
  }

  return(
    <div className={cls.join('')}>
      <label htmlFor="">{props.label}</label>
      <input 
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />

      
      {
        isInvalid(props)
          ?<span>{props.errorMassage || 'Enter the correct value'}</span>
          :null
        }

        <span>{props.errorMessage}</span>
    </div>
  )
}

export default Input