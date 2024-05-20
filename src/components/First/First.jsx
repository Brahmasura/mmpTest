import style from "./first.module.scss";
import face from "../../assets/SalesGuy.svg";
import send from "../../assets/sendIcon.svg";
import More from "../moreButton/More";
import { useContext } from "react";
import { ContainerContext } from "../../Cotntext/ContainerContext";

const First = () => {
  const { handleContainerClick } = useContext(ContainerContext);

  const handleInputClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <div onClick={() => handleContainerClick(1)} className={style.mainDiv}>
        <div className="textDiv">
          <h2>Welcome, Ashley</h2>
          <br />
          <h3>Let's make something amazing!</h3>
        </div>

        <div className={style.secondDiv}>
          <img src={face} alt="sales guy" />

          <div className={style.thirdDiv}>
            <p>How can i help today?</p>
            <input
              onClick={handleInputClick}
              type="text"
              placeholder="Ask away! Lucky is here to help"
            />
          </div>

          <img className={style.sendDiv} src={send} alt="the send icon" />
        </div>

        <More
          position="absolute"
          top={1.851851851}
          right={1.2385416666}
          backgroundColor="rgba(0, 0, 0, 0.25)"
          text="CHAT MENU"
          width={2.3958333333}
          height={2.3958333333}
        />
      </div>
    </>
  );
};

export default First;
