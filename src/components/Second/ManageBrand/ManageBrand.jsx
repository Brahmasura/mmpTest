import style from "./manageBrand.module.scss";
import close from "../../../assets/closeIcon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BackAndBrandSelector from "../Components/BackAndBrandSelector/BackAndBrandSelector";

const dummyArray = [
  {text:"first"},
  {text:"second"},
  {text:"third"},
  {text:"fourth"},
  {text:"fifth"},
  {text:"sixth"},
  {text:"seven"},
  {text:"eight"},
]

const ManageBrand = () => {
   
  // the above state is only for testing
  const navigate = useNavigate();
  const location = useLocation();

  const { index } = location.state || {};

  const [activeOption, setActiveOption] = useState(index.index);

  // this function is to set active state
  const handleActive = (term) => {
    setActiveOption(term);
  }

  // this useEffect is to check that what is the value of the index that we have recieved
  useEffect(() => {
    console.log("index no:", index.index);
  }, [index]);

  // function to handle Navigation
  const handleNavigation = (destination) => {
    navigate(destination);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.mainContainer}>
      <BackAndBrandSelector/>
        <div className={style.topDiv}>
        {dummyArray.map((item,index) => (
          <p  key={index} onClick={() => handleActive(index)} className={activeOption === index ? style.clicked : style.unclicked }>{item.text}</p>
        ))}
        </div>
       
      </div>

      {/* the close icon */}
      <img
        onClick={() => handleNavigation("/")}
        className={style.closeIcon}
        src={close}
        alt="the close icon"
      />
    </div>
  );
};

export default ManageBrand;
