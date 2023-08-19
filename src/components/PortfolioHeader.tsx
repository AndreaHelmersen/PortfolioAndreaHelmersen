import { Typography, Link } from "@mui/material";
import { useEffect, useState } from "react";

export const PortfolioHeader = () => {
  const corbelFontStyle = {
    fontFamily: "Corbel, Arial, sans-serif",
    color: "Black",
  };

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const flipAngle = -scrollY / 5;

  const transformStyle = {
    transform: `perspective(1200px) rotateX(${flipAngle}deg)`,
    transition: "transform 0.3s",
  };

  return (
    <div style={{ padding: "50px" }}>
      <div
        style={{
          ...transformStyle,
          padding: "50px 0",
          minHeight: "85vh",
          backgroundColor: "#F9CB81",
          transformOrigin: "top center",
          borderRadius: "20px", // Add rounded corners
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", // Add a subtle shadow
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Typography
            variant="h1"
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

            <Typography variant="body1" style={corbelFontStyle}>
              {" "}
              <a
                href="mailto:andrea.helmersen@gmail.com"
                style={{ color: "black", textDecoration: "none" }}
              >
                andrea.helmersen@gmail.com
              </a>
            </Typography>

            <Typography variant="body1" style={corbelFontStyle}>
              +47 46792692
            </Typography>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
