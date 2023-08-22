import { Card, Grid, Link, Typography } from "@mui/material";

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
    <Grid sx={{ paddingBottom: "6vh" }}>
      <Card
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          paddingBottom: "5%", // Adjust padding for responsiveness
          minHeight: "90vh",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              padding: "5%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Grid sx={{ flex: 1 }}>
              <Typography variant="h4" style={corbelFontStyle}>
                {props.title}
              </Typography>
            </Grid>
            <Typography variant="h6" style={corbelFontStyle}>
              {props.workedOn}
            </Typography>

            <hr
              style={{
                width: "100%",
                border: "1px solid #ccc",
                borderColor: "black",
              }}
            />

            <Typography
              sx={{ ...corbelFontStyle, pt: "10px", fontWeight: "800" }}
            >
              The Project
            </Typography>
            <Typography>{props.projectText}</Typography>

            {props.ideaText && (
              <>
                <Typography
                  sx={{ ...corbelFontStyle, pt: "15px", fontWeight: "800" }}
                >
                  The Idea
                </Typography>
                <Typography>{props.ideaText}</Typography>
              </>
            )}

            {props.companyText && (
              <>
                <Typography
                  sx={{ ...corbelFontStyle, pt: "15px", fontWeight: "800" }}
                >
                  The Company
                </Typography>
                <Typography>{props.companyText}</Typography>
              </>
            )}

            <Typography
              sx={{ ...corbelFontStyle, pt: "16px", fontWeight: "800" }}
            >
              Acquired Knowledge
            </Typography>
            <Typography>{props.knowledgeText}</Typography>

            <Typography sx={{ ...corbelFontStyle, pt: "10px" }}>
              <Link href={props.link} sx={linkStyle}>
                Link to project
              </Link>
            </Typography>
          </Grid>

          {props.image && (
            <Grid item xs={12} sm={6} sx={{ padding: "5%" }}>
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
            </Grid>
          )}
        </Grid>
      </Card>
    </Grid>
  );
};
