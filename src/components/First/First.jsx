import style from "./first.module.scss";
import face from "../../assets/SalesGuy.svg";
import send from "../../assets/send.svg";
import More from "../moreButton/More";

const First = () => {
  return (
    <>
       <div className={style.mainDiv}>
        <h2>Welcome, Ashley</h2><br/>
        <h3>Let's make something amazing!</h3>

        {/* second div */}
        <div className={style.secondDiv}>
          
          <img src={face} alt="sales guy" />
          
          {/* third div */}
          <div className={style.thirdDiv}>
            <p>How can i help today?</p>
            <input type="text" placeholder="Ask away! Lucky is here to help" />
          </div>

          {/* fourthDiv */}
          <div className={style.fourthDiv}>
            <img src={send} alt="the send icon"/>
          </div>

        </div>

        
        <More position="absolute" top={0} right={0} backgroundColor="grey" width={30} height={30} />
       </div>
    </>
  )
}

export default First;