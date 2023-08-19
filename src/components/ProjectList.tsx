import { ProjectCard } from "./ProjectCard";
import { STATIC_PROJECT_DATA } from "../staticData/ProjectData";
import { Typography } from "@mui/material";

export const ProjectList = () => {
  const corbelFontStyle = {
    fontFamily: "Corbel, Arial, sans-serif",
  };
  return (
    <div style={{ padding: "100px" }}>
      <div style={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          style={corbelFontStyle}
          sx={{ fontWeight: "700" }}
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
