import { ProjectCard } from "./ProjectCard";
import { STATIC_PROJECT_DATA } from "../staticData/ProjectData";

export const ProjectList = () => {
  return (
    <div>
      {STATIC_PROJECT_DATA.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};
