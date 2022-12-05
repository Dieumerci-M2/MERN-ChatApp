import React, { createContext, useState, useEffect } from "react";


const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState({});
  const [notification, setNotification] = useState([]);
  const [ chats, setChats ] = useState([]);
 

 useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("InfoUser"));
   setUser( userInfo );
   
  }, []);
  
  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};


export {ChatContext}
export default ChatProvider;