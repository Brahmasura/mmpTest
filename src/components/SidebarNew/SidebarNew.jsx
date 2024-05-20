import style from "./sidebarNew.module.scss";

import face from "../../assets/sidebar_icons/logo.svg";
import ticket from "../../assets/sidebar_icons/ticketSidebar.svg";
import boat from "../../assets/sidebar_icons/boat.svg";
import box from "../../assets/sidebar_icons/box.svg";
import flag from "../../assets/sidebar_icons/flag.svg";
import fort from "../../assets/sidebar_icons/fort.svg";
import tool from "../../assets/sidebar_icons/tool.svg";
import wheel from "../../assets/sidebar_icons/wheelNew.svg";
import mmpLogo from "../../assets/sidebar_icons/mmpLogo.svg";

import oneOne from "../../assets/sidebar_icons/redSidebarIcons/iconOne/oneOne.svg";
import oneTwo from "../../assets/sidebar_icons/redSidebarIcons/iconOne/oneTwo.svg";
import oneThree from "../../assets/sidebar_icons/redSidebarIcons/iconOne/oneThree.svg";
import oneFour from "../../assets/sidebar_icons/redSidebarIcons/iconOne/oneFour.svg";

import twoOne from "../../assets/sidebar_icons/redSidebarIcons/iconTwo/twoOne.svg";
import twoTwo from "../../assets/sidebar_icons/redSidebarIcons/iconTwo/twoTwo.svg";
import twoThree from "../../assets/sidebar_icons/redSidebarIcons/iconTwo/twoThree.svg";
import twoFour from "../../assets/sidebar_icons/redSidebarIcons/iconTwo/twoFour.svg";

import threeOne from "../../assets/sidebar_icons/redSidebarIcons/iconThree/threeOne.svg";
import threeTwo from "../../assets/sidebar_icons/redSidebarIcons/iconThree/threeTwo.svg";
import threeThree from "../../assets/sidebar_icons/redSidebarIcons/iconThree/threeThree.svg";

import fourOne from "../../assets/sidebar_icons/redSidebarIcons/iconFour/fourOne.svg";
import fourTwo from "../../assets/sidebar_icons/redSidebarIcons/iconFour/fourTwo.svg";
import fourThree from "../../assets/sidebar_icons/redSidebarIcons/iconFour/fourThree.svg";
import fourFour from "../../assets/sidebar_icons/redSidebarIcons/iconFour/fourFour.svg";
import fourFive from "../../assets/sidebar_icons/redSidebarIcons/iconFour/fourFive.svg";
import fourSix from "../../assets/sidebar_icons/redSidebarIcons/iconFour/fourSix.svg";

import fiveOne from "../../assets/sidebar_icons/redSidebarIcons/iconFive/fiveOne.svg";
import fiveTwo from "../../assets/sidebar_icons/redSidebarIcons/iconFive/fiveTwo.svg";
import fiveThree from "../../assets/sidebar_icons/redSidebarIcons/iconFive/fiveThree.svg";
import fiveFour from "../../assets/sidebar_icons/redSidebarIcons/iconFive/fiveFour.svg";
import fiveFive from "../../assets/sidebar_icons/redSidebarIcons/iconFive/fiveFive.svg";
import fiveSix from "../../assets/sidebar_icons/redSidebarIcons/iconFive/fiveSix.svg";

import sixOne from "../../assets/sidebar_icons/redSidebarIcons/iconSix/sixOne.svg";
import sixTwo from "../../assets/sidebar_icons/redSidebarIcons/iconSix/sixTwo.svg";
import sixThree from "../../assets/sidebar_icons/redSidebarIcons/iconSix/sixThree.svg";
import sixFour from "../../assets/sidebar_icons/redSidebarIcons/iconSix/sixFour.svg";
import sixFive from "../../assets/sidebar_icons/redSidebarIcons/iconSix/sixFive.svg";

import sevenOne from "../../assets/sidebar_icons/redSidebarIcons/iconSeven/sevenOne.svg";
import sevenTwo from "../../assets/sidebar_icons/redSidebarIcons/iconSeven/sevenTwo.svg";
import sevenThree from "../../assets/sidebar_icons/redSidebarIcons/iconSeven/sevenThree.svg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const iconsArray = [
  {
    icon: ticket,
    text: "MarketingPasses",
    menu: [
      { text: "New Pass", image: oneOne },
      { text: "View Passes", image: oneTwo },
      { text: "Needs Response", image: oneThree },
      { text: "Completed Passes", image: oneFour },
    ],
  },
  {
    icon: flag,
    text: "MyBrands",
    menu: [
      { text: "Projects", image: twoOne },
      { text: "Brand Manager", image: twoTwo },
      { text: "View Calendar", image: fiveOne },
      { text: "Schedule Coaching", image: twoFour },
      { text: "Map", image: twoThree },
    ],
  },
  {
    icon: boat,
    text: "LeadStream",
    menu: [
      { text: "New Campaign", image: threeOne },
      { text: "View Campaigns", image: threeTwo },
      { text: "Settings", image: threeThree },
    ],
  },

  {
    icon: fort,
    text: "MyMarketingCRM",
    menu: [
      { text: "Contacts", image: fourOne },
      { text: "Pipeline", image: fourTwo },
      { text: "Communications", image: fourThree },
      { text: "Marketing", image: fourFour },
      { text: "New Lead", image: fourFive },
      { text: "New Sales Call", image: fourSix },
    ],
  },
  {
    icon: tool,
    text: "Tools",
    menu: [
      { text: "Calendars", image: fiveOne },
      { text: "Courses", image: fiveTwo },
      { text: "Websites", image: fiveThree },
      { text: "Funnels", image: fiveFour },
      { text: "Payments", image: fiveFive },
      { text: "Forms", image: fiveSix },
    ],
  },
  {
    icon: box,
    text: "Resources",
    menu: [
      { text: "Reporting", image: sixOne },
      { text: "Reputation", image: sixTwo },
      { text: "App Marketplace", image: sixThree },
      { text: "Guides", image: sixFour },
      { text: "MyMarketingDrive", image: sixFive },
    ],
  },
  {
    icon: wheel,
    text: "Settings",
    menu: [
      { text: "Chat Manager", image: sevenOne },
      { text: "MyMarketingPartner", image: sevenTwo },
      { text: "Account Settings", image: sevenThree },
    ],
  },
];

const SidebarNew = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const navigate= useNavigate();

  const handleIconHover = (index) => {
    setHoveredIcon(index);
  };

  const handleNavigation = () => {
    navigate("/");
  }

  return (
    <>
      {/* this is the initial sidebar */}
      <div className={style.sideBarMainDiv}>
        {/* black sidebar begins */}
        <div
          className={`${style.blackSidebar} ${
            hoveredIcon === null && style.bsbUnhovered
          } `}
        >
          {/* logo div */}
          <div className={style.sidebarLogoDiv}>
            <img onClick={handleNavigation} className={style.logo} src={face} alt="face guy" />
            {hoveredIcon !== null && (
              <img className={style.mmpPic} src={mmpLogo} alt="mmp logo" />
            )}
          </div>

          {/* sideIconDivs */}
          {iconsArray.map((item, index) => (
            <>
              <div
                key={index}
                className={`${style.sideIconDiv} ${
                  hoveredIcon === index ? style.hoveredSideIcon : ""
                }`}
                onMouseEnter={() => handleIconHover(index)}
              >
                <img
                  className={style.sideIcon}
                  src={item.icon}
                  alt="the ticket logo"
                />
                {hoveredIcon !== null && <p>{item.text}</p>}
              </div>
            </>
          ))}
        </div>
        {/* black sidebar ends */}

        {/* red sidebar begins */}
        {hoveredIcon !== null && (
          <div
            className={`${style.redSidebar} ${
              hoveredIcon === null && style.rsbUnhovered
            }`}
            onMouseEnter={() => handleIconHover(hoveredIcon)}
            onMouseLeave={() => handleIconHover(null)}
          >
            {iconsArray[hoveredIcon].menu.map((option, index) => (
              <div key={index} className={style.menuDiv}>
                <img src={option.image} alt="the logo" />
                <p>{option.text}</p>
              </div>
            ))}
          </div>
        )}
        {/* red sidebar ends */}
      </div>
    </>
  );
};

export default SidebarNew;
