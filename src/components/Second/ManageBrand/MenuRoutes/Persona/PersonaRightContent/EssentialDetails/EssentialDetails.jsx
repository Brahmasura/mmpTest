import PersonaEdit from "./Component/PersonaEdit/PersonaEdit";
import style from "./essentialDetails.module.scss";

// the personaContent array begins
const personaContent = [
  {
    title: "Primary Website",
    description: "What is your primary brand URL?",
  },
  {
    title: "Primary Website",
    description: "What is your primary brand URL?",
  },
  {
    title: "Primary Website",
    description: "What is your primary brand URL?",
  },
  {
    title: "Primary Website",
    description: "What is your primary brand URL?",
  },
  {
    title: "Primary Website",
    description: "What is your primary brand URL?",
  },
  {
    title: "Primary Website",
    description: "What is your primary brand URL?",
  },
  {
    title: "Primary Website",
    description: "What is your primary brand URL?",
  },
  {
    title: "Primary Website",
    description: "What is your primary brand URL?",
  },
];
// the personaContent array ends

const EssentialDetails = () => {
  return (
    <div className={style.mainDiv}>
      {personaContent.map((item, index) => (
        <PersonaEdit
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default EssentialDetails;
