import style from "./chat.module.scss";
import chatAshley from "../../../assets/First/Chat/chatAshley.svg";
import chatClose from "../../../assets/First/Chat/chatClose.svg";
import { useContext } from "react";
import { ContainerContext } from "../../../Cotntext/ContainerContext";
import chatHistory from "../../../assets/First/Chat/chatHistory.svg";
import chatStar from "../../../assets/First/Chat/chatStar.svg";
import chatDownArrow from "../../../assets/First/Chat/chatDownArrow.svg";
import chatSend from "../../../assets/First/Chat/chatSend.svg";
import chatQuestion from "../../../assets/First/Chat/chatQuestion.svg";



const chatCardsArray = [
  {text: "Discuss my brand"},
  {text: "What should i do next?"},
  {text: "Inquire about existing ticket"},
  {text: "Create new ticket"},
  {text: "Get support on using MyMarketingPass"},
  {text: "Discuss a project"},
];


const Chat = () => {
  const { handleChatMenuClick } = useContext(ContainerContext);

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

          {/* image div */}
          {/* <div className="chatAshleyDivContainer"> */}
          <div className={style.chatAshleyDiv}>
            <img src={chatAshley} alt="ashleyChat logo" />
          </div>
          {/* </div> */}

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
            <div className={style.rightdivOne}>
              <img src={chatStar} alt="chat Start" />
              <p>SpaceX</p>
              <img
                className={style.chatDownArrow}
                src={chatDownArrow}
                alt="chat down arrow"
              />
            </div>
          </div>

          {/* divTwo */}
          <div className={style.divTwo}>
            <div className={style.searchDiv}></div>
            <img src={chatSend} alt="the send icon" />
          </div>

          <hr className={style.hr}/>

          {/* divThree */}
          <div className={style.divThree}>
            {
              chatCardsArray.map((item, index) => (
                <div key={index} className={style.chatCard}>
                  <img src={chatQuestion} alt="chat Question logo"/>
                  <p>{item.text}</p>
                </div>
              ))
            }
          </div>

          {/* right div inner ends */}
        </div>

        <img
          onClick={handleChatMenuClick}
          className={style.chatClose}
          src={chatClose}
          alt="close logo"
        />
      </div>
    </>
  );
};

export default Chat;
