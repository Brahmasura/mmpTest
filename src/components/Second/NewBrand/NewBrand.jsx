import { useNavigate } from "react-router-dom";
import PortalComponent from "../../PortalComponent/PortalComponent";
import style from "./newBrand.module.scss";

const NewBrand = () => {
    const navigate = useNavigate();
      
    const handleNavigation = () => {
        navigate("/");
    }
  return (
    <PortalComponent>
      <div className={style.mainDiv}>
        <p onClick={handleNavigation}>Hi this is the new Brand Page</p>
      </div>
    </PortalComponent>
  );
};

export default NewBrand;
