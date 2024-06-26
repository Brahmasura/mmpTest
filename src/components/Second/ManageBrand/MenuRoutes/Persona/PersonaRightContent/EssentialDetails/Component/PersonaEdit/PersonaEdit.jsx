import { useState } from "react";
import style from "./personaEdit.module.scss";
import editIcon from "../../../../../../../../../assets/Second/editIcon.svg";

const PersonaEdit = ({ title, description }) => {
  const [editClicked, setEditClicked] = useState(false);

  // function to handleEditClick
  const handleEditClick = () => {
    setEditClicked(!editClicked);
  };

  return (
    <div className={style.mainDiv}>
      <p className={style.titlePara}>{title}</p>

      {editClicked ? (
        <></>
      ) : (
        <>
          {" "}
          <div className={style.descriptionDiv}>
            <p>{description}</p>
            <img src={editIcon} alt="edit icon" />
          </div>
        </>
      )}
    </div>
  );
};

export default PersonaEdit;
