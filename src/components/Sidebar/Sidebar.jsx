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
    menu: ["New Pass", "View Passes", "Needs Response", "Complete Passes"],
  },
  {
    icon: flag,
    text: "MyBrands",
    menu: ["Projects", "Brand Manager", "Map"],
  },
  {
    icon: boat,
    text: "LeadStream",
    menu: ["one", "two", "three"],
  },

  {
    icon: fort,
    text: "MyMarketinCRM",
    menu: [
      "Contacts",
      "Pipeline",
      "Communication",
      "Marketing",
      "New Lead",
      "New Sales Call",
    ],
  },
  {
    icon: tool,
    text: "Tools",
    menu: ["Calendars", "Courses", "Websites", "Funnels", "Payments", "Forms"],
  },
  {
    icon: box,
    text: "Data",
    menu: [
      "Reporting",
      "Reputation",
      "App Marketplace",
      "Guides",
      "MyMarketingDrive",
    ],
  },
  {
    icon: wheel,
    text: "Settings",
    menu: ["Chat Manager", "MyMarketingPartner", "Account Setting"],
  },
];

const Sidebar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (index) => {
    setHoveredIcon(index);
  };

  return (
    <>
    {/* this is the initial sidebar */}
      <div className={style.mainDiv}>

      {/* this is main logo */}
        <div className={style.faceDiv}>
          <img src={face} alt="face guy" />
        </div>


        {/* these are the icons in the initial sidebar  */}
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

      {hoveredIcon !== null && (
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
      )}

      {/* the red div */}
      {hoveredIcon !== null && (
        <div
          className={style.redSidebar}
          onMouseEnter={() => handleIconHover(hoveredIcon)}
          onMouseLeave={() => handleIconHover(null)}
        >
          {iconsArray[hoveredIcon].menu.map((option, index) => (
            <div key={index} className={style.menuDiv}>
              <p>{option}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Sidebar;
