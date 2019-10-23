import React from "react";
import "./Input.scss";

const Input = ({ type, change, name, label, value }) => {
  const focusInput = e => {
    const parent = e.target.parentNode
    parent.querySelector('.input__label').classList.add('active')
  }

  const blurInput = e => {
    const parent = e.target.parentNode
    if (!e.target.value.length) parent.querySelector('.input__label').classList.remove('active')
  }


  return (
      <div className="input">
        <input
          className="input__control"
          type={type}
          name={name}
          onChange={change}
          value={value}
          onFocus={focusInput}
          onBlur={blurInput}
          required
        />
        <label className="input__label">{label}</label>
      </div>
  )
}

export default Input