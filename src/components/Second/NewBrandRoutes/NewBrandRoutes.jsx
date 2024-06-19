import { Route, Routes, useNavigate } from "react-router-dom";
import PortalComponent from "../../PortalComponent/PortalComponent";
import closeIcon from "../../../assets/closeIcon.svg";
import style from "./newBrand.module.scss";
import NewBrandStepOne from "./NewBrandStepOne/NewBrandStepOne";
import NewBrandStepTwo from "./NewBrandStepTwo/NewBrandStepTwo";
import NewBrandStepThree from "./NewBrandStepThree/NewBrandStepThree";
import NewBrandStepFour from "./NewBrandStepFour/NewBrandStepFour";

const NewBrand = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };
  return (
    <PortalComponent>
      <div className={style.mainDiv}>
        <div className={style.contentWrapper}>
          <Routes>
            <Route path="/" element={<NewBrandStepOne />} />
            <Route path="/addBrandName" element={<NewBrandStepTwo/>}/>
            <Route path="/addBrandLogo" element={<NewBrandStepThree/>}/>
            <Route path="/newBrandFinal" element={<NewBrandStepFour/>}/>
          </Routes>

          <img
            onClick={handleNavigation}
            className={style.closeIcon}
            src={closeIcon}
            alt="the close icon"
          />
        </div>
      </div>
    </PortalComponent>
  );
};

export default NewBrand;
