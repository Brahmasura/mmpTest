import style from "./chat.module.scss";
import chatAshleyLogo from "../../../assets/First/Chat/chatAshleyLogo.svg";
import chatClose from "../../../assets/First/Chat/chatClose.svg";
import { useContext, useState } from "react";
import { ContainerContext } from "../../../Cotntext/ContainerContext";
import chatHistory from "../../../assets/First/Chat/chatHistory.svg";
import chatStar from "../../../assets/First/Chat/chatStar.svg";
import chatDownArrow from "../../../assets/First/Chat/chatDownArrow.svg";
import chatSend from "../../../assets/First/Chat/chatSend.svg";
import chatQuestion from "../../../assets/First/Chat/chatQuestion.svg";
import chatBrandStar from "../../../assets/First/Chat/chatBrandStar.svg";

// chatArray
const chatCardsArray = [
  { text: "Discuss my brand" },
  { text: "What should i do next?" },
  { text: "Inquire about existing ticket" },
  { text: "Create new ticket" },
  { text: "Get support on using MyMarketingPass" },
  { text: "Discuss a project" },
];

// chatBandsArray
const chatBrandsArray = [
  { brand: "SpaceX" },
  { brand: "Burger King" },
  { brand: "Arturo's" },
  { brand: "Farmatodo" },
  { brand: "Andino" },
  { brand: "Edwards" },
  { brand: "Zingg" },
  { brand: "Slim" },
  { brand: "Nike" },
  { brand: "Adidas" },
  { brand: "Vogue" },
  { brand: "Bazaar" },
];

const Chat = () => {
  const { handleChatMenuClick } = useContext(ContainerContext);
  const [brand, setBrand] = useState("SpaceX");
  const [brandTabOpen, setBrandTabOpen] = useState(false);

  const handleSelectBrand = (text) => {
    setBrand(text);
  };

  const handleBrandToggle = () => {
    setBrandTabOpen(!brandTabOpen);
  };

  return (
    <>
      <div className={style.mainDiv}>
        {/* left div */}
        <div className={style.leftDiv}>
          <div className={style.textDiv}>
            <h2>Welcome, Ashley</h2>
            <br />
            <h3>Happy Monday! How can i help?</h3>
          </div>

          <img
            className={style.chatAshleyLogo}
            src={chatAshleyLogo}
            alt="chat Ashley logo"
          />

          {/* rest of the paras */}
          <div className={style.paraDiv}>
            <p className={style.firstPara}>Hi! I am Lucky</p>
            <p className={style.secondPara}>
              your Personal Marketing Assistant
            </p>
          </div>

          <p className={style.thirdPara}>
            Talk to me about anything from adding new tickets, checking on
            existing ones, or even general business strategies for growing your
            brand!
          </p>
        </div>

        {/* right div */}
        <div className={style.rightDiv}>
          {/* right div inner begins  */}

          {/* divOne */}
          <div className={style.divOne}>
            <div className={style.leftdivOne}>
              <img src={chatHistory} alt="chat history logo" />
              <p>RECENT CHATS</p>
            </div>
            <div onClick={handleBrandToggle} className={style.rightdivOne}>
              <img src={chatStar} alt="chat Start" />
              <p>{brand}</p>
              <img
                className={
                  brandTabOpen ? style.chatUpArrow : style.chatDownArrow
                }
                src={chatDownArrow}
                alt="chat down arrow"
              />

              {/* the open chat brands div  */}

              {brandTabOpen && (
                <div className={style.brandsToggleDiv}>
                  {chatBrandsArray.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelectBrand(item.brand)}
                      className={style.brandDiv}
                    >
                      <img src={chatBrandStar} alt="star" />
                      <p>{item.brand}</p>
                    </div>
                  ))}

                  <div className={style.createBrandDiv}>
                    <p>+ Create a Brand</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* divTwo */}
          <div className={style.divTwo}>
            <div className={style.searchDiv}></div>
            <img src={chatSend} alt="the send icon" />
          </div>

          <hr className={style.hr} />

          {/* divThree */}
          <div className={style.divThree}>
            {chatCardsArray.map((item, index) => (
              <div key={index} className={style.chatCard}>
                <img src={chatQuestion} alt="chat Question logo" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          {/* right div inner ends */}
        </div>
      </div>
      <img
        onClick={handleChatMenuClick}
        className={style.chatClose}
        src={chatClose}
        alt="close logo"
      />
    </>
  );
};

export default Chat;
