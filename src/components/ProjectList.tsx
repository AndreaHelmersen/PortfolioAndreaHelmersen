import { ProjectCard } from "./ProjectCard";
import deconXImage from "../Images/DeconX.png";

const projects = [
  {
    title: "Decon-X",
    projectText:
      "The project involved conducting various strategic analyses based on interviews conducted with a selected company, as well as identifying a strategic challenge. Based on the challenge, we developed three marketing strategies to 'address' the challenge and created an action plan for the best solution.",
    companyText:
      "The company we worked with for this project was Decon-X. They provide an automated disinfection robot.",
    knowledgeText:
      "Strategic analysis (PESTEL, Five Forces, VRIO, SWOT, etc.), developing strategic solutions, strategic planning, marketing strategies, interview techniques, teamwork.",
    link: "https://gitfront.io/r/AndreaHelmersen/Eo62QB3V989J/Decon-X/",
    image: deconXImage,
    workedOn: "Spring 2022"
  },
];

export const ProjectList = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};
