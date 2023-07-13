import React from 'react'

type Props = {}

const Hamburger = (props: Props) => {
  return (
    <div className='w-2 h-2 fixed top-14 md:hidden flex flex-col justify-around right-20'>
    <div className='w-10 h-2 bg-slate-700'/>
    <div className='w-10 h-2 bg-slate-700'/>
    <div className='w-10 h-2 bg-slate-700'/>
    </div>
  ) 
}

export default Hamburger