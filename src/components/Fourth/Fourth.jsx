import style from "./fourth.module.scss";
import ticket from "../../assets/ticket.svg";
import Tbody from "./Tbody/Tbody";

const tbodyArray = [
  {
    number: "12345678",
    brand: "Reclamation",
    projectContent: "website",
    projectColor: "red",
    nickname: "SpaceX Web",
    type: "Website",
    department: "Design",
    progressWidth: "75%",
  },
  {
    number: "12345678",
    brand: "SpaceX",
    projectContent: "Website SpaceX New Project",
    projectColor: "red",
    nickname: "SpaceX Web",
    type: "Blog Post",
    department: "Copywriting",
    progressWidth: "10%",
  },
  {
    number: "12345678",
    brand: "SmartFit",
    projectContent: "website",
    projectColor: "green",
    nickname: "Web work",
    type: "Keyword Research",
    department: "SEO",
    progressWidth: "80%",
  },
  {
    number: "12345678",
    brand: "SpaceX",
    projectContent: "Website SpaceX New Project",
    projectColor: "orange",
    nickname: "SpaceX Web",
    type: "New Webpage",
    department: "Development",
    progressWidth: "40%",
  },
  {
    number: "12345678",
    brand: "SmartFit",
    projectContent: "Loading Page Brand",
    projectColor: "red",
    nickname: "Smart Web",
    type: "Meta Ads",
    department: "SEO",
    progressWidth: "50%",
  },
  {
    number: "12345678",
    brand: "FronteX",
    projectContent: "website",
    projectColor: "blue",
    nickname: "Frontex",
    type: "Copywriting",
    department: "Copywriting",
    progressWidth: "80%",
  },

  {
    number: "12345678",
    brand: "Reclamation",
    projectContent: "website",
    projectColor: "red",
    nickname: "SpaceX Web",
    type: "Website",
    department: "Design",
    progressWidth: "75%",
  },
  {
    number: "12345678",
    brand: "SpaceX",
    projectContent: "Website SpaceX New Project",
    projectColor: "red",
    nickname: "SpaceX Web",
    type: "Blog Post",
    department: "Copywriting",
    progressWidth: "10%",
  },
  {
    number: "12345678",
    brand: "SmartFit",
    projectContent: "website",
    projectColor: "green",
    nickname: "Web work",
    type: "Keyword Research",
    department: "SEO",
    progressWidth: "80%",
  },
  {
    number: "12345678",
    brand: "SpaceX",
    projectContent: "Website SpaceX New Project",
    projectColor: "orange",
    nickname: "SpaceX Web",
    type: "New Webpage",
    department: "Development",
    progressWidth: "40%",
  },
  {
    number: "12345678",
    brand: "SmartFit",
    projectContent: "Loading Page Brand",
    projectColor: "red",
    nickname: "Smart Web",
    type: "Meta Ads",
    department: "SEO",
    progressWidth: "50%",
  },
  {
    number: "12345678",
    brand: "FronteX",
    projectContent: "website",
    projectColor: "blue",
    nickname: "Frontex",
    type: "Copywriting",
    department: "Copywriting",
    progressWidth: "80%",
  },
  {
    number: "12345678",
    brand: "SmartFit",
    projectContent: "website",
    projectColor: "green",
    nickname: "Web work",
    type: "Keyword Research",
    department: "SEO",
    progressWidth: "80%",
  },
  {
    number: "12345678",
    brand: "SpaceX",
    projectContent: "Website SpaceX New Project",
    projectColor: "orange",
    nickname: "SpaceX Web",
    type: "New Webpage",
    department: "Development",
    progressWidth: "40%",
  },
  {
    number: "12345678",
    brand: "SmartFit",
    projectContent: "Loading Page Brand",
    projectColor: "red",
    nickname: "Smart Web",
    type: "Meta Ads",
    department: "SEO",
    progressWidth: "50%",
  },
  {
    number: "12345678",
    brand: "FronteX",
    projectContent: "website",
    projectColor: "blue",
    nickname: "Frontex",
    type: "Copywriting",
    department: "Copywriting",
    progressWidth: "80%",
  },
];

const Fourth = () => {
  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.fourthLeft}>
          <p>MarketingPasses:</p>
          <p>In Progress</p>
          <p className={style.darkParas}>
            Up Next <span> 07</span>
          </p>
          <p className={style.darkParas}>
            Drafts <span> 12</span>
          </p>
          <p className={style.darkParas}>
            needs Attention <span> 19</span>
          </p>
          <p className={style.darkParas}>
            Needs Approval <span> 03</span>
          </p>
          <p className={style.darkParas}>Completed</p>

          <div className={style.passDiv}>
            <img src={ticket} alt="the ticket" />
            <p>New MarketingPass</p>
          </div>
        </div>
        <div className={style.fourthRight}>
          {/* table wrapper  */}
          <div className={style.tableWrapper}>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Brand</th>
                  <th>Project</th>
                  <th>Nickname</th>
                  <th>Type</th>
                  <th>Department</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody>
                {tbodyArray.map((item, index) => (
                  <Tbody key={index} item={item} />
                ))}
              </tbody>
            </table>
          </div>

          <p className={style.viewAllPara}>VIEW ALL</p>
        </div>
      </div>
    </>
  );
};

export default Fourth;
