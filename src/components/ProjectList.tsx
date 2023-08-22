import { ProjectCard } from "./ProjectCard";
import {
  STATIC_PROJECT_DATA_bus,
  STATIC_PROJECT_DATA_tech,
} from "../staticData/ProjectData";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const ProjectList = () => {
  const corbelFontStyle = {
    fontFamily: "Corbel, Arial, sans-serif",
  };
  const [option, setOption] = useState("TechProjects");

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };

  const selectedProjectData =
    option === "TechProjects"
      ? STATIC_PROJECT_DATA_tech
      : STATIC_PROJECT_DATA_bus;

  return (
    <>
      <div
        style={{
          paddingTop: "150px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          style={corbelFontStyle}
          sx={{ fontWeight: "700" }}
        >
          PROJECTS
        </Typography>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={option}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={"TechProjects"}>Technical Projects</MenuItem>
            <MenuItem value={"busProjects"}>Business Projects</MenuItem>
          </Select>
        </FormControl>

        {selectedProjectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </>
  );
};
