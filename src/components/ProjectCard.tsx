import { Typography } from "@mui/material";

interface ProjectCardProps {
  title: string;
  projectText: string;
  knowledgeText: string;
  image: string;
  link: string;
  workedOn: string;
  ideaText?: string;
  companyText?: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const corbelFontStyle = {
    fontFamily: "Corbel, Arial, sans-serif",
  };

  const linkStyle = {
    fontFamily: "Corbel, Arial, sans-serif",
    color: "blue",
  };

  return (
    <div style={{ display: "flex", padding: "50px" }}>
      <div style={{ width: "70%" }}>
      <div style={{ display: "flex", alignItems: "baseline" }}>
          <div style={{ flex: 1 }}>
            <Typography variant="h3" style={corbelFontStyle}>
              {props.title}
            </Typography>
          </div>
          <Typography variant="h6" style={corbelFontStyle}>
            {props.workedOn}
          </Typography>
        </div>

        <hr style={{ width: "100%", border: "1px solid #ccc" }} /> 

        <div style={corbelFontStyle}>
          <Typography sx={{ pt: "10px", fontWeight: "800" }}>
            The Project
          </Typography>
          <Typography>{props.projectText}</Typography>

          <Typography sx={{ pt: "15px", fontWeight: "800" }}>
            {props.ideaText ? "The Idea" : "The Company"}
          </Typography>
          <Typography>
            {props.ideaText ? props.ideaText : props.companyText}
          </Typography>

          <Typography sx={{ pt: "16px", fontWeight: "800" }}>
            Acquired Knowledge
          </Typography>
          <Typography>{props.knowledgeText}</Typography>

          <Typography style={corbelFontStyle} sx={{ pt: "10px" }}>
            <a href={props.link} style={linkStyle}>
              Link to project
            </a>
          </Typography>
        </div>
      </div>

      <div style={{ width: "30%", margin: "20px", overflow: "hidden" }}>
        <img
          src={props.image}
          alt="Project Image"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};
