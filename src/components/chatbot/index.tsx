'use client'
import { useChatBot } from '@/hooks/chatbot/use-chatbot'
import React, { useEffect } from 'react'
import { BotWindow } from './window'
import { cn } from '@/lib/utils'
import { MessageCircleMore } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation';

type Props = {}

const AiChatBot = (props: Props) => {
  const {
    onOpenChatBot,
    botOpened,
    onChats,
    register,
    onStartChatting,
    showActions,
    setShowActions,
    onAiTyping,
    messageWindowRef,
    currentBot,
    loading,
    onRealTime,
    setOnChats,
    errors,
  } = useChatBot()

  useEffect(()=>{
    if(botOpened){
      if(showActions)
        setShowActions(false)
    }
  },[botOpened])
  return (
    <div className="h-screen flex flex-col justify-end items-end gap-2">
      {botOpened&&
        <BotWindow
          errors={errors}
          setChat={setOnChats}
          realtimeMode={onRealTime}
          helpdesk={currentBot?.helpdesk!}
          domainName={currentBot?.name!}
          ref={messageWindowRef}
          help={currentBot?.chatBot?.helpdesk}
          theme={currentBot?.chatBot?.background}
          textColor={currentBot?.chatBot?.textColor}
          chats={onChats}
          register={register}
          onChat={onStartChatting}
          onResponding={onAiTyping}
        />
      }

      <div
        onMouseOver={()=>{
          if(!showActions &&!botOpened)
          setShowActions(true)
        }}
        onMouseLeave={()=>{
          if(!botOpened && showActions)
          setShowActions(false)
          }}
        className={cn(
          'rounded-md  relative mr-2 cursor-pointer flex w-[150px] flex-col items-end justify-end bg-transparent',
          '',
          loading ? 'invisible' : 'visible',
          showActions?'h-[200px]':'h-20'
        )}
      >
        {showActions&&!botOpened&&

      <div className='hover:scale-110 rounded-lg shadow-md mt-2 border-[1px] border-[#EF7F1A] p-1'
        onClick={onOpenChatBot}
      >
        <p className='p-1 text-[10px] font-inter font-semibold'>
          Book Nursing Care
        </p>
      </div>
        }
        {showActions&&!botOpened&&
       <div className='hover:scale-110 rounded-lg shadow-md mt-2 border-[1px] border-[#EF7F1A] p-1'
        onClick={onOpenChatBot}
       >
        <p className='p-1 text-[10px] font-inter font-semibold'>
          Book Mother & Child Care
        </p>
      </div>
        }

        {showActions&&!botOpened&&
       <div className='hover:scale-110 rounded-lg shadow-md mt-2 border-[1px] border-[#EF7F1A] p-1'
        onClick={onOpenChatBot}
       >
        <p className='p-1 text-[10px] font-inter font-semibold'>
          Book Physiotherapist
        </p>
      </div>
        }


        <span className='hover:scale-110  my-2 shadow-lg rounded-md flex flex-row items-center justify-end p-2 border-[1.5px] border-[#EF7F1A]'

        onClick={onOpenChatBot}

        >
          {!showActions&&
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Ask anything',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              '24/7 Support',
              1000,
              'AI Powered',
              1000,
            ]}
            wrapper="span"
            speed={50}
            className='text-xs font-inter font-semibold w-[90px] duration-150 ease-in-out '
            style={{ display: 'inline-block',animation:"smooth-appear 1s ease forwards" }}
            repeat={Infinity}
          />
          }

             <MessageCircleMore color='#EF7F1A' />
        </span>



      </div>
    </div>
  )
}

export default AiChatBot
