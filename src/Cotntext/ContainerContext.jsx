import { createContext, useState } from "react";


export const ContainerContext = createContext();

export const ContainerProvider = ({children}) => {
    const [chatMenuClicked, setChatMenuClicked] = useState(false);

    const handleChatMenuClick = () => {
        setChatMenuClicked(!chatMenuClicked);
      };
    const value = {chatMenuClicked, setChatMenuClicked, handleChatMenuClick};

    return (
        <ContainerContext.Provider value={value}>
            {children}
        </ContainerContext.Provider>
    )
}