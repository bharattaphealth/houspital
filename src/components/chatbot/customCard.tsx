import { ChevronRight } from 'lucide-react'
import React from 'react'

type PropTypes={
  heading:String,
  subheading:String,
  left:React.ReactNode
}
const CustomCard = (props:PropTypes) => {
  return (
    <div
        className='flex items-center px-3
        mx-2.5 my-1 p-3 bg-white rounded-md border-[1px] border-[#00000024]
        shadow-sm'
    >
        <div className='flex-none w-7'>
           {props.left}
        </div>

        <div className='flex flex-col w-64 justify-center align-center max-w-48 ml-3'>
          <p className='text-xs font-inter font-semibold'>
            {props.heading}
          </p>
          {props.subheading&&
          <p className='text-[11px] font-inter font-light text-[#737376]'>
            {props.subheading}
          </p>
          }
        </div>
        <div className='flex w-8 flex-row justify-end align-center'>
        <ChevronRight color='#EF7F1A' size={18} className="self-end" />
        </div>
    </div>
  )
}

export default CustomCard
