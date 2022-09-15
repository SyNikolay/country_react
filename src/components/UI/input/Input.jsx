import React from 'react'
import cls from './Input.module.css'

const Input = ({filtred,onInput,placeholder}) => {
  return (
    <>
      <input 
      className={cls.input}
        value={filtred}
        onInput={(e) => onInput(e.target.value)}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input
