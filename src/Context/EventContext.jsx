import { createContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [clickedEvent, setClickedEvent] = useState(null);

  const handleEventClick = (date) => {
    setClickedEvent( date );
  };

  const value = { clickedEvent, setClickedEvent, handleEventClick };

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
};
