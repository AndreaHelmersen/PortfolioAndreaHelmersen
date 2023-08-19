import { Typography } from "@mui/material";

interface ProjectCardProps {
  title: string;
  projectText: string;
  knowledgeText: string;
  link: string;
  workedOn: string;
  image?: string;
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

          {props.ideaText && (
            <>
              <Typography sx={{ pt: "15px", fontWeight: "800" }}>
                The Idea
              </Typography>
              <Typography>{props.ideaText}</Typography>
            </>
          )}

          {props.companyText && (
            <>
              <Typography sx={{ pt: "15px", fontWeight: "800" }}>
                The Company
              </Typography>
              <Typography>{props.companyText}</Typography>
            </>
          )}

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

      {props.image && (
        <div style={{ width: "600px", margin: "20px" }}>
          <img
            src={props.image}
            alt="Project Image"
            style={{
              maxWidth: "100%",
              height: "auto",
              maxHeight: "400px",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
      )}
    </div>
  );
};
