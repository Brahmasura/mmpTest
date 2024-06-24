import ImageParaDiv from "../Components/ImageParaDivs/ImageParaDiv";
import style from "./audiences.module.scss";
import audiences from "../../../../../assets/Second/audiencesLogo.svg";
import addLogo from "../../../../../assets/Second/addLogo.svg";

const Audiences = () => {
  return (
    <div className={style.mainDiv}>
      <ImageParaDiv image={audiences} text={"Audience #1"} />
      <ImageParaDiv image={addLogo} text={"ADD NEW AUDIENCE"}/>
    </div>
  );
};

export default Audiences;
