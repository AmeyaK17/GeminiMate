import React from 'react'
import './TitlePage.css'

const TitlePage = () => {
  return (
    <div className='h-[95vh] flex flex-col justify-center items-center text-center bg-black'>
      <h1><span className='title title-font'>GeminiMate</span></h1>
      <h2 className='sub-title-font text-white'>We visualize, structure and personalize your learning experience using <span className='title'>Google Gemini</span></h2>
    </div>
  )
}

export default TitlePage
