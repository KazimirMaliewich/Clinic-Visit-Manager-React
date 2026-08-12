import React from 'react'

export const Input = ({type, placeholder, label, name, value, onChange, id, error}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} placeholder={placeholder} 
      name={name} value={value} onChange={(e) => onChange(e.target.value)} id={name}/>
      <span>{error}</span>
    </div>
  )
}
