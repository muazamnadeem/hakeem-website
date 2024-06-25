import { Box, Grid, Typography, Container } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import girl from "../../assets/images/girl.png";
import backgroundImage from "../../assets/images/logobg.png";

// Styled components definitions...

const ImageContainer = styled(Box)({
  position: "relative",
  overflow: "hidden",
  border: "4px solid transparent",
  borderRadius: "16px",
  transition: "border 0.3s ease",
  marginBottom: "10px",
  "&:hover": {
    border: "4px solid #218AFF",
    "& img": {
      transform: "scale(1.06)",
      transition: "transform 0.3s ease",
    },
  },
});

const Styledtext = styled(Box)({
  "@media (max-width: 600px)": {
    width: "70%",
  },
});

const StyledCard = styled(Box)({
  cursor: "pointer",
  position: "relative",
  "&:hover": {
    "& .hoverText": {
      color: "#218AFF",
    },
  },
  "@media (max-width: 600px)": {
    // marginTop: "64px",
  },
});

const StyledImage = styled(Box)({
  borderRadius: "16px",
  width: "100%",
  "@media (max-width: 600px)": {
    width: "103px",
    height: "103px",
    objectFit: "cover",
    marginBottom: "0",
  },
});

const StyledImages = styled(Box)({
  borderRadius: "16px",
  width: "100%",
  "@media (max-width: 600px)": {
    width: "90%",
    marginBottom: "0",
  },
});

const StyledTitleTop = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "32px",
  fontWeight: "800",
  marginBottom: "15px",
  color: "#fff",
  "@media (max-width: 600px)": {
    fontSize: "24px",
  },
});

const StyledTitle = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "150%",
  marginBottom: "8px",
  color: "#fff",
  "@media (max-width: 600px)": {
    fontSize: "16px",
  },
});

const StyledDate = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "150%",
  color: "rgba(255, 255, 255, 0.6)",
});

const data = [
  {
    img: girl,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "06.04.2024",
  },
  {
    img: girl,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "06.04.2024",
  },
  {
    img: girl,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "06.04.2024",
  },
  {
    img: girl,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "06.04.2024",
  },
  {
    img: girl,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "06.04.2024",
  },
  {
    img: girl,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "06.04.2024",
  },
];

const data2 = [
  {
    img: girl,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "06.04.2024",
  },
  {
    img: girl,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "06.04.2024",
  },
];

const NewsPage = () => {
  return (
    <Box
      sx={{
        paddingTop: {
          xs: "20px",
          sm: "50px",
          md: "70px",
          lg: "110px",
          "@media (max-width: 992px)": {
            paddingTop: "110px",
          },
          "@media (max-width: 600px)": {
            paddingTop: "70px",
          },
        },
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          sx={{
            marginBottom: "48px",
          }}
        >
          {data2.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <a href="/" target="_blank" style={{ textDecoration: "none" }}>
                <StyledCard>
                  <ImageContainer>
                    <StyledImages component="img" src={item.img} alt="girl" />
                  </ImageContainer>
                  <StyledTitleTop variant="h5" className="hoverText">
                    {item.title}
                  </StyledTitleTop>
                  <StyledDate>{item.date}</StyledDate>
                </StyledCard>
              </a>
            </Grid>
          ))}
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{
            marginTop: "20px",
            marginBottom: "0", // Ensure no extra space at the bottom
          }}
        >
          {data.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                marginBottom: "48px",
                display: { xs: "block", sm: "block" },
                flexDirection: { xs: "row-reverse", sm: "row" },
                "@media (max-width: 600px)": {
                  marginBottom: "unset",
                },
              }}
            >
              <a href="/" target="_blank" style={{ textDecoration: "none" }}>
                <StyledCard
                  sx={{
                    display: { xs: "flex", sm: "block" },
                    flexDirection: { xs: "row-reverse", sm: "column" },
                    alignItems: { xs: "center", sm: "flex-start" },
                    "@media (max-width: 600px)": {
                      maxWidth: { xs: "90%" },
                    },
                  }}
                >
                  <ImageContainer>
                    <StyledImage
                      component="img"
                      src={item.img}
                      alt="girl"
                      sx={{
                        width: { xs: "50%", sm: "100%" },
                      }}
                    />
                  </ImageContainer>
                  <Styledtext>
                    <Box>
                      <StyledTitle variant="h5" className="hoverText">
                        {item.title}
                      </StyledTitle>
                      <StyledDate>{item.date}</StyledDate>
                    </Box>
                  </Styledtext>
                </StyledCard>
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsPage;
