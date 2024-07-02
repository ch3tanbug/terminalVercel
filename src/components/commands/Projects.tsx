import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the Work”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Total Recon",
    desc: "Python tool crafted for bug hunters, enhancing their reconnaissance process.",
    url: "https://github.com/ch3tanbug/Total_recon",
  },
  {
    id: 2,
    title: "DarkWeb Crawler",
    desc: "Crawler to help you search keywords in a set of given links on darkweb",
    url: "https://github.com/ch3tanbug/Dark_Web_Crawler",
  },
  {
    id: 3,
    title: "AWS Infra setup with Terraform",
    desc: "Terraform script to establish infrastructure on AWS, which includes a Virtual Private Cloud (VPC) containing two public subnets connected to an Internet Gateway (IG) via route tables. Finally, the subnets are attached to a load balancer (LB).",
    url: "https://www.linkedin.com/posts/chetan-kashyap_devsecops-terraform-aws-activity-7212073762173673472-EpAK?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 4,
    title: "Javascript Notes",
    desc: "Curated detailed notes to learn Javascript.",
    url: "https://github.com/ch3tanbug/Javascript_Notes",
  },
];

export default Projects;
