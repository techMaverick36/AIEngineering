import React, { useEffect, useState } from 'react'

const App = () => {
  const [message, setMessage]= useState('');

  useEffect(()=>{
    fetch('/api/hello')
    .then(res => res.json())
    .then(data => setMessage(data.message))
  })
  return (
    <div>
      <p className=' text-blue-400 text-3xl p-4 font-bold'>{message}</p>
    </div>
  )
}

export default App
