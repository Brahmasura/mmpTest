import Fifth from "../Fifth/Fifth";
import First from "../First/First";
import Fourth from "../Fourth/Fourth";
import Second from "../Second/Second";
import Third from "../Third/Third";
import style from "./container.module.scss";

const Container = () => {
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.rowOne}>
          {/* <div className={style.first}> */}
            <First />
          {/* </div> */}


          {/* {/* <div className={style.second}> */}
            <Second />
          {/* </div> */}


          {/* <div className={style.third}> */}
            <Third />
          {/* </div>  */}
          
        </div>
        <div className={style.rowTwo}>
          {/* <div className={style.fourth}> */}
            <Fourth />
          {/* </div> */}
          {/* <div className={style.fifth}> */}
            {/* <Fifth /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Container;
