import React from 'react'
import Header from './Header'

const Grid2 = () => {
  return (
    <>
    <Header/>
    <div className='bg-[#fff] grid h-dvh grid-rows-3 grid-cols-3 gap-1 m-1'>
      <div className='bg-[#F6FB7A]'></div>
      <div className='bg-[#98c545]'></div>
      <div className='bg-[#98c545]'></div>
      <div className='bg-[#ff4c4ce4]'></div>
      <div className='bg-[#F6FB7A]'></div>
      <div className='bg-[#98c545]'></div>
      <div className='bg-[#ff4c4ce4]'></div>
      <div className='bg-[#ff4c4ce4]'></div>
      <div className='bg-[#F6FB7A]'></div>
    </div>
    </>
  )
}

export default Grid2