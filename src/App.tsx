import { Typography } from "@mui/material";
import { ProjectCard } from "./components/ProjectCard";

export const App = () => {
  return (
    <>
      <Typography variant="h1">Portfolio Andrea Helmersen</Typography>
      <ProjectCard title={"Project 1"} content={"This is a project."} />
    </>
  );
};
