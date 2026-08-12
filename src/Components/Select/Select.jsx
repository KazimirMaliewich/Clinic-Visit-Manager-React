import React from 'react'

export const Select = ({value, onChange, options, name, label, id }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select value={value} onChange={onChange} 
      name={name} id={name}>{options.map((option) => (
        <option key={text} value={option.value}>{option.text}</option>
      ))}</select>
    </div>
  )
}
