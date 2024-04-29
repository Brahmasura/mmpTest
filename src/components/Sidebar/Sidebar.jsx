import style from "./sidebar.module.scss";
import face from "../../assets/SalesGuy.svg";
import ticket from "../../assets/sidebar_icons/ticketSidebar.svg";
import boat from "../../assets/sidebar_icons/boat.svg";
import box from "../../assets/sidebar_icons/box.svg";
import flag from "../../assets/sidebar_icons/flag.svg";
import fort from "../../assets/sidebar_icons/fort.svg";
import tool from "../../assets/sidebar_icons/tool.svg";
import wheel from "../../assets/sidebar_icons/wheel.svg";
import { useState } from "react";

const iconsArray = [
  {
    icon: ticket ,
  },
  {
    icon: boat,
  },
  {
    icon: box ,
  },
  {
    icon: flag ,
  },
  {
    icon: fort,
  },
  {
    icon: tool ,
  },
  {
    icon: wheel ,
  },
]

const Sidebar = () => {
 
   const [isHovered, setIsHovered] = useState(false);

   const handleIconHover = () => {
    setIsHovered(!isHovered);
   }

  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.faceDiv}>
          <img src={face} alt="face guy" />
          {/* <img src={} alt="the mmp logo"/> */}
        </div>

        {
          iconsArray.map((item, index) => (
            <img key={index} className={style.ticket}  src={item.icon} alt="the ticket logo" />
          ))
        }

      
        <img className={`${style.ticket} ${style.bottom}`}  src={ticket} alt="the ticket logo" />

      </div>
    </>
  );
};

export default Sidebar;


