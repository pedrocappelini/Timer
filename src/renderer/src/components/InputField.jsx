import React from 'react'

export default function InputField({ label, value, onChange, placeholder }) {

const handleChange = (e) => {
  const inputValue = e.target.value;

  if (/^\d*$/.test(inputValue)) {
    if (parseInt(inputValue, 10) < 60) {
      onChange(e);
    }
    if(inputValue === ''){
      onChange({ target: { value: 0 } });
    }
  }
};

  return (
    <div className='text-3xl'>
      <label
      className='text-white'
      >{label}:</label>
      <input
      className='w-20 bg-white text-blue-400 bg-opacity-20 rounded-lg px-3'
      type = 'number'
      value = {value}
      onChange={handleChange}
      placeholder={placeholder}
      ></input>
    </div>
  )
}
