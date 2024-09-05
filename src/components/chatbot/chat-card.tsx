
import { ImageIcon, SendHorizonal, SendHorizontalIcon } from 'lucide-react'
import React from 'react'

type Props ={
    heading:String,
    setChatScreen: (value: boolean) => void

}
export const chatCard = (props:Props) => {
  return (
    <div className='mx-2.5 my-3 bg-white p-3 rounded-md border-[1px] border-[#00000024] shadow-sm'

    >
        <div className='flex flex-row justify-between'>
            <p className='font-inter text-dark  text-sm font-semibold'>
            {props.heading}
            </p>
            <div className='flex flex-row items-center'>
            <p className='font-inter text-white rounded-md bg-[#5D6A85]  text-[10px] font-bold py-0.5 px-1'>
                {'AI '}
            </p>
            <p className='font-inter text-[#5D6A85] ml-0.5 text-[10px]'>
                {' '}Powered
            </p>
            </div>
        </div>
        <div className="h-[100px] p-2 flex flex-col justify-between rounded border-[#EF7F1A] border-[1.25px] mt-2 "
            onClick={()=>props.setChatScreen(true)}
        >
            {/* <div className='flex-1 flex-col justify-between items-between content-between p-2'> */}
                <p className='text-[#1B1F26B8] font-inter font-light text-[11px]'>
                    {'Have a question about Housepital or its services? Ask anything you want...'}
                </p>
                <div className='flex flex-row justify-end'>
                    <div className='bg-[#FFF0E2] flex items-center justify-between border-[#EF7F1A] border-1 rounded py-1 px-2'>
                        <p className='font-semibold text-xs text-[#EF7F1A]'>
                            {'Send'}
                        </p>
                        <SendHorizonal color='#EF7F1A' size={12} className='ml-0.5'/>

                    </div>
                </div>

            {/* </div> */}
        </div>

    </div>

  )
}

export default chatCard
