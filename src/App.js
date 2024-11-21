import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

export default function App() {

  let [advice, setAdvice] = useState('')

  let fetchAdvice = async ()=>{
    let {data} = await axios.get('https://api.adviceslip.com/advice')
    try {
      let { data } = await axios.get('https://api.adviceslip.com/advice');
      console.log(data.slip.advice); 
      setAdvice(data.slip.advice)
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  }

  useEffect(()=>{
    fetchAdvice()
  },[])


  return (
    <div className='app'>
      <div className='card'>
        <h1 className='heading'>{advice}</h1>
        <button className='button' onClick={fetchAdvice}>
          <span>GIVE ME AN ADVICE!</span>
        </button>
      </div>
    </div>
  )
}
