import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "BCA (Computer Science)",
    desc: "Guru Nanak Dev Engineering College | 2022 ~ 2025",
  },
  {
    title: "Certified AppSec Practitioner (CAP)",
    desc: "SecOps Group | 2023",
  },
  {
    title: "Certified Network Security Professional (CNSP)",
    desc: "SecOps Group | 2024",
  },
  {
    title: "OCI Certified Security Professional",
    desc: "Oracle Cloud Infrastructure | 2023",
  },
  {
    title: "AWS Cloud Practitioner",
    desc: "AWS | 2023",
  },
];

export default Education;
