import ImageParaDiv from "../Components/ImageParaDivs/ImageParaDiv";
import style from "./offers.module.scss";
import offerLogo from "../../../../../assets/Second/offersLogo.svg";
import addLogo from "../../../../../assets/Second/addLogo.svg";

const Offers = () => {
  return (
    <div className={style.mainDiv}>
      <ImageParaDiv image={offerLogo} text={"Offer #1"} />
      <ImageParaDiv image={addLogo} text={"ADD NEW OFFER"} />
    </div>
  );
};

export default Offers;
