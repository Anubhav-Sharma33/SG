import React from 'react'

const SectionWrapper = (props:any) => {
  return (
    <div className='w-full h-[100vh] py-[2.5rem]'>
    <div className='w-full px-[1.5rem] md:px-[2rem] lg:w-[91%] lg:px-[0.75rem] max-w-[1340px] m-auto'>{props.children}</div>
    </div>
  )
}

export default SectionWrapper