import style from "./tbody.module.scss";

const Tbody = ({ item }) => {
  return (
    <>
      <tr>
        <td>{item.number}</td>
        <td>{item.brand}</td>
        <td>
          <div
            className={style.projectDiv}
            style={{ backgroundColor: item.projectColor }}
          >
            <p>{item.projectContent}</p>
          </div>
        </td>
        <td>{item.nickname}</td>
        <td>{item.type}</td>
        <td>{item.department}</td>
        <td>
          <div className={style.progressMain}>
            <div
              className={style.progressSecond}
              style={{ width: item.progressWidth }}
            ></div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Tbody;
