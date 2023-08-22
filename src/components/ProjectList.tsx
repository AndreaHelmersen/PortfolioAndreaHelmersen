import { ProjectCard } from "./ProjectCard";
import { STATIC_PROJECT_DATA } from "../staticData/ProjectData";
import { Typography } from "@mui/material";

export const ProjectList = () => {
  const corbelFontStyle = {
    fontFamily: "Corbel, Arial, sans-serif",
  };
  return (
    <div style={{paddingTop: "150px"}}>
      <div style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={corbelFontStyle}
          sx={{ fontWeight: "700", pb: "20px"}}
        >
          PROJECTS
        </Typography>
      </div>

      {STATIC_PROJECT_DATA.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};
