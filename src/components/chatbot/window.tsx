import { ChatBotMessageProps } from '@/schemas/conversation.schema'
import React, { forwardRef, useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import RealTimeMode from './real-time'
import Image from 'next/image'
import TabsMenu from '../tabs/intex'
import { BOT_TABS_MENU } from '@/constants/menu'
import ChatIcon from '@/icons/chat-icon'
import { TabsContent } from '../ui/tabs'
import { Separator } from '../ui/separator'
import Bubble from './bubble'
import { Responding } from './responding'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { CalendarPlus2, ChevronLeft, Paperclip, Send } from 'lucide-react'
import { Label } from '../ui/label'
import { CardDescription, CardTitle } from '../ui/card'
import Accordion from '../accordian'
import UploadButton from '../upload-button'
import ChatCard from './chat-card'
import CustomCard from './customCard'

type Props = {
  errors: any
  register: UseFormRegister<ChatBotMessageProps>
  chats: { role: 'assistant' | 'user'; content: string; link?: string }[]
  onChat(): void
  onResponding: boolean
  domainName: string
  theme?: string | null
  textColor?: string | null
  help?: boolean
  realtimeMode:
    | {
        chatroom: string
        mode: boolean
      }
    | undefined
  helpdesk: {
    id: string
    question: string
    answer: string
    domainId: string | null
  }[]
  setChat: React.Dispatch<
    React.SetStateAction<
      {
        role: 'user' | 'assistant'
        content: string
        link?: string | undefined
      }[]
    >
  >
}

const primaryColor='#EF7F1A'

export const BotWindow = forwardRef<HTMLDivElement, Props>(
  (
    {
      errors,
      register,
      chats,
      onChat,
      onResponding,
      domainName,
      helpdesk,
      realtimeMode,
      setChat,
      textColor,
      theme,
      help,
    },
    ref
  ) => {
    const [chatScreen,setChatScreen] = useState(false)
    console.log(errors)
    if(!chatScreen)
    return (
      <div className="h-[450px] w-[300px] flex flex-col bg-gradient-to-b from-[#EF7F1A] from-20% via-[#FFFFFF] to-[#FFFFFF] rounded-xl mr-[80px] border-[1px] overflow-auto relative left-[60px] md:left-0"
      >
         <div className="flex justify-between px-4 pt-4">
          <div className="flex gap-2 items-center">
              <img
                src='https://github.com/bharatvarmagit/bharatvarmagit.github.io/blob/master/HouspitalLogo.png?raw=true'
                alt="logo"
                height={25}
                width={120}
              />


            <div className="flex items-start flex-col">

              {realtimeMode?.mode && (
                <RealTimeMode
                  setChats={setChat}
                  chatRoomId={realtimeMode.chatroom}
                />
              )}
            </div>
          </div>
          <div className="relative">
            <p className="text-white font-inter text-[9px] text-[#FFFFFF]">powered by</p>
            <p className="text-[9px] text-white font-inter flex justify-center text-[#FFFFFF]">Tap Health </p>
            {/* <Image
              src="https://ucarecdn.com/019dd17d-b69b-4dea-a16b-60e0f25de1e9/propuser.png"
              fill
              alt="users"
              objectFit="contain"
            /> */}
          </div>
        </div>

        <div className='mt-8 ml-5'>
          <p className='text-[#F8F8F8] font-inter font-semibold text-xl'
          style={{opacity:0.8}}
          >
            Hello there {String.fromCodePoint(parseInt('0x1f44b', 16))}
          </p>
          <p className='text-[#F8F8F8] font-semibold  font-inter text-xl '>
            How can we Help?
          </p>
        </div>
        <ChatCard heading="Ask any question" setChatScreen={setChatScreen} />
        <div onClick={()=>setChatScreen(true)}>
        <CustomCard
          heading={"Book a Physiotherapist"}
          subheading={''}
          left={
            <img
              src="https://github.com/bharatvarmagit/bharatvarmagit.github.io/blob/master/icon-physiotherapy.png?raw=true"
              height={28}
              width={28}
              alt='img'

            />
          }
          />
          </div>
          <div onClick={()=>setChatScreen(true)}>
          <CustomCard
          heading={"Book Baby and Mother Care"}
          subheading={""}
          left={
           <img alt="img"
           src="https://github.com/bharatvarmagit/bharatvarmagit.github.io/blob/master/icon-baby%20-nd-mother%20care.png?raw=true"
              height={28}
              width={28}


            />
          }
          />
          </div>
          <div onClick={()=>setChatScreen(true)}>
          <CustomCard
          heading={"Get nursing care at home"}
          subheading={""}
          left={
           <img
            alt="img"
            src="https://github.com/bharatvarmagit/bharatvarmagit.github.io/blob/master/icon-nurse.png?raw=true"
              height={28}
              width={28}
          />
          }
          />
          </div>



      </div>
    )
    else
    return(
      <div className="h-[450px] w-[300px] flex flex-col bg-white rounded-xl mr-[80px] border-[1px] overflow-auto relative left-[60px] md:left-0"
      >
        <div
          className=' h-[60px] bg-[#EF7F1A] flex items-center px-2'
        >
          <div className='flex-none w-10' onClick={()=>setChatScreen(false)}>
            <ChevronLeft color='#FFFFFF' size={25}/>
          </div>
          <div className='flex-1 w-64'>
            <div className="flex-1 flex-col justify-center items-center">
              <p className='text-white font-inter font-bold text-md '>
                Houspital
              </p>
              <div className='flex items-center'>
                <p className='font-inter text-[#EF7F1A] rounded-lg bg-[#FFFFFF]  text-[10px] font-bold px-0.5'>
                {'AI '}
                </p>
                <p className='text-white text-[11px] font-inter font-normal ml-1'>
                  Replies instantly
              </p>
            </div>



            </div>
          </div>
        </div>
        <div className="flex flex-col h-[390px]">
              <div
                style={{
                  background: theme || '',
                  color: textColor || '',
                }}
                className="px-3 flex h-[390px] flex-col py-5 gap-3 chat-window overflow-y-auto"
                ref={ref}
              >
                {chats.map((chat, key) => (
                  <Bubble
                    key={key}
                    message={chat}
                  />
                ))}
                {onResponding && <Responding />}
              </div>
              <form
                onSubmit={onChat}
                className="flex px-3 py-1 flex-col flex-1 bg-porcelain"
              >
                <div className="flex justify-between items-center">
                  <Input
                    {...register('content')}
                    placeholder="Type your message..."
                    className="focus-visible:ring-0 flex-1 p-0 focus-visible:ring-offset-0 bg-porcelain rounded-none outline-none border-none"
                  />
                  <Button
                    type="submit"
                    className=""
                    onClick={()=>alert("content of message is ")}
                  >
                    <Send  size={20} />
                  </Button>
                </div>
                {/* <Label htmlFor="bot-image">
                  <Paperclip />
                  <Input
                    {...register('image')}
                    type="file"
                    id="bot-image"
                    className="hidden"
                  />
                </Label> */}
              </form>
            </div>
    </div>
  )
  }
)

BotWindow.displayName = 'BotWindow'
