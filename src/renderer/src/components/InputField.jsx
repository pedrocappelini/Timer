import React from 'react'

export default function InputField({ label, value, onChange, placeholder }) {

  const handleChange = (e) => {
    const inputValue = e.target.value
    if(/^\d*$/.test(inputValue) || inputValue === '') {
      onChange(e)
    } 
  }

  return (
    <div className='text-3xl'>
      <label
      className='text-white'
      >{label}:</label>
      <input
      className='w-20 bg-transparent text-blue-400'
      type = 'number'
      value = {value}
      onChange={handleChange}
      placeholder={placeholder}
      ></input>
    </div>
  )
}
