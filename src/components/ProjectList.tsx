import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import {
  STATIC_PROJECT_DATA_bus,
  STATIC_PROJECT_DATA_tech,
} from "../staticData/ProjectData";

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
      <Grid
        container
        spacing={2}
        sx={{
          paddingTop: "150px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item>
          <Typography
            variant="h4"
            style={corbelFontStyle}
            sx={{ fontWeight: "700" }}
          >
            PROJECTS
          </Typography>
        </Grid>

        <Grid item>
          <FormControl sx={{ m: 1, minWidth: 120, pb: 2, pt: 1 }}>
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
        </Grid>

        {selectedProjectData.map((project, index) => (
          <Grid item key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
