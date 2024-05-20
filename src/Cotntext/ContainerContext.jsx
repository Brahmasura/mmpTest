import { createContext, useState } from "react";


export const ContainerContext = createContext();

export const ContainerProvider = ({children}) => {
    const [containerNumber, setContainerNumber] = useState(0);

    const handleContainerClick = (number) => {
        setContainerNumber(number);
      };
    const value = {containerNumber, setContainerNumber, handleContainerClick };

    return (
        <ContainerContext.Provider value={value}>
            {children}
        </ContainerContext.Provider>
    )
}