import style from "./sidebar.module.scss";
import face from "../../assets/SalesGuy.svg";
import ticket from "../../assets/sidebar_icons/ticketSidebar.svg";
import boat from "../../assets/sidebar_icons/boat.svg";
import box from "../../assets/sidebar_icons/box.svg";
import flag from "../../assets/sidebar_icons/flag.svg";
import fort from "../../assets/sidebar_icons/fort.svg";
import tool from "../../assets/sidebar_icons/tool.svg";
import wheel from "../../assets/sidebar_icons/wheel.svg";
import mmpLogo from "../../assets/sidebar_icons/mmpLogo.svg";
import { useState } from "react";

const iconsArray = [
  {
    icon: ticket,
    text: "MarketingPasses",
  },
  {
    icon: flag,
    text: "MyBrands",
  },
  {
    icon: boat,
    text: "LeadStream",
  },

  {
    icon: fort,
    text: "MyMarketinCRM",
  },
  {
    icon: tool,
    text: "Tools",
  },
  {
    icon: box,
    text: "Data",
  },
  {
    icon: wheel,
    text: "Settings",
  },
];

const Sidebar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (index) => {
    setHoveredIcon(index);
  };

  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.faceDiv}>
          <img src={face} alt="face guy" />
        </div>

        {iconsArray.map((item, index) => (
          <>
            <div
              key={index}
              className={`${style.sideIconDiv} ${
                hoveredIcon === index ? style.hoveredSideIcon : ""
              }`}
              onMouseEnter={() => handleIconHover(index)}
              onMouseLeave={() => handleIconHover(null)}
            >
              <img
                className={`${style.ticket} ${
                  hoveredIcon ? style.iconHovered : ""
                }`}
                src={item.icon}
                alt="the ticket logo"
              />
            </div>
          </>
        ))}

        <img
          className={`${style.ticket} ${style.bottom}`}
          src={ticket}
          alt="the ticket logo"
        />
      </div>

      {hoveredIcon !== null ? (
        <div className={style.detailedSidebar}>
          <img src={mmpLogo} alt="mmp logo" />

          {iconsArray.map((item, index) => (
            <>
              <div
                key={index}
                className={`${style.secondSideIconDiv} ${
                  hoveredIcon === index ? style.hoveredSideIcon : ""
                }`}
                onMouseEnter={() => handleIconHover(index)}
                onMouseLeave={() => handleIconHover(null)}
              >
                <p>{item.text}</p>
              </div>
            </>
          ))}
        </div>
      ) : (
        ""
      )
      }
    </>
  );
};

export default Sidebar;
