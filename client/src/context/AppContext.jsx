import { Children, createContext,useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const AppContext = createContext()


export const AppContextProvider = ({Children})=>{
    
    const navigate = useNavigate()
    const [user, setuser] = useState(null);
    const [chats,setChats] = useState([]);
    const [selectedChat,setSelectedChat] = useState(null);
    const [theme,setTheme ] = useState(localStorage.getItem('theme')||'light');
    


    const fetchUser = async () =>{
        setuser()
    }

    useEffect(()=>{
        fetchUser()
    },[])
    
    
    const fetchUserChats = async ()  =>{
        setChats()
        setSelectedChat([0])
    }


    useEffect(()=>{
        if(theme==='dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    },[theme])
    
    useEffect(()=>{
        if(user){
            fetchUserChats()
        }
        else{
            setChats([])
            setSelectedChat(null)

        }
    },[user])




    const value = {
        navigate,user,setuser,fetchUser,chats,setChats,selectedChat,setSelectedChat,theme
    } 

    return  (
        <AppContext.Provider value={value}>
            {Children}
        </AppContext.Provider>
    )
}

export const useAppContext = ()=> useContext(AppContext)