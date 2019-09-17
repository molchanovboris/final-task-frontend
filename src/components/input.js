import React from 'react';

function isInvalid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched
}

const Input = props => {
  const inputType = props.type || 'text'
  const htmlFor = `${inputType}-${Math.random()}`

  if (isInvalid(props)) {
    
  }

  return(
    <div>
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
      

      <span>{props.errorMassage}</span>
    </div>
  )
}

export default Input