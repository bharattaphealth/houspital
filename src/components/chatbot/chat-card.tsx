
import React from 'react'

type Props ={
    heading:String,

}
export const chatCard = (props:Props) => {
  return (
    <div className='mx-2.5 my-3 bg-white p-3 rounded-md'>
        <div className='flex flex-row justify-between'>
            <p className='font-inter text-dark  text-xs md:text-sm lgtext-xs font-semibold'>
            {props.heading}
            </p>
            <div className='flex flex-row'>
            <p className='font-inter text-white rounded bg-[#007AFF]  text-xs md:text-sm mb-1 p-1'>
                {'AI '}
            </p>
            <p className='font-inter text-[#007AFF] ml-1 text-xs md:text-sm mt-1'>
                {' '}Powered
            </p>
            </div>

        </div>

    </div>

  )
}

export default chatCard
