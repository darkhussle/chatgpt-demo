import React, { useState } from 'react'
import { useActionData } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Sidebar = () => {
  
  
    const {chats,setSelectedChat,theme, setTheme,user} = useAppContext()
    const [search,setSearch] = useState('')


  
  
  
    return (
    <div className="flex flex-col h-screen min-w-72 p-5 dark:bg-gradient-to-b from-[#242124]/30 to-[#000000]/30 border-r border-[#80609F]/30 backdrop-blur-3xl transition-all duration-500 max-md:absolute left-0 z-10">
        
      
      <img src={theme==='dark' ? assets.logo_full :as} alt="" 
      className='w-full max-w-48'/>
    </div>
  )
}

export default Sidebar
