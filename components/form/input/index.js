'use client'
import React from 'react'

function Input({ label, ...props }) {
  return (
    <label>
      <span>{label}</span>
      <input {...props} />
    </label>
  )
}

export default Input
