import { Typography, Link, Paper, Box, Card, Grid } from "@mui/material";

export const PortfolioHeader = () => {
  const corbelFontStyle = {
    fontFamily: "Corbel, Arial, sans-serif",
    color: "Black",
  };

  return (
    <div style={{ padding: "50px" }}>
      <Card
        style={{
          width: "80vw",
          padding: "5%", // Adjust padding for responsiveness
          minHeight: "50vh",
          backgroundColor: "#F9CB81",
          borderRadius: "20px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            style={corbelFontStyle}
            sx={{ fontWeight: "800", pt: "150px" }}
          >
            PORTFOLIO
          </Typography>

          <hr
            style={{
              width: "100%",
              border: "1px solid #ccc",
              marginBottom: "5px",
              maxWidth: "800px",
              borderColor: "black",
            }}
          />

          <Typography variant="h4" style={corbelFontStyle}>
            Andrea Arstad Helmersen
          </Typography>
          <div style={{ paddingTop: "100px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="body1" style={corbelFontStyle}>
                  <Link
                    href="https://www.linkedin.com/in/andrea-arstad-helmersen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    LinkedIn
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="body1" style={corbelFontStyle}>
                  <a
                    href="mailto:andrea.helmersen@gmail.com"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    andrea.helmersen@gmail.com
                  </a>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="body1" style={corbelFontStyle}>
                  +47 46792692
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      </Card>
    </div>
  );
};
