/* eslint-disable no-useless-computed-key */
import { useState, useRef, Fragment } from "react";

import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";

import VerticalAnimatedLines from "./VerticalAnimatedLines";

import useInViewPort from "../../hooks/useInViewPort";

import "../../assets/jerry.css";

import share from "../../assets/images/share.png";
import hero from "../../assets/images/hero.png";
import combo from "../../assets/images/combo.png";
import { copyToClipboard } from "../../utils";
import { TOWER_DEFENSE_PLAY_LINK } from "../../constants";

const DEFAULT_ANIMATION_CLASSES = {
  title: "",
  description: "",
  buttonsRow: "",
  combo: "",
};

export default function Tower() {
  const [animationClass, setAnimationClass] = useState(
    DEFAULT_ANIMATION_CLASSES
  );

  const verticalAnimatedLinesRef = useRef(null);
  const verticalAnimatedLinesDestinationRef = useRef(null);
  const logoContainerRef = useRef(null);
  const logoImageRef = useRef(null);
  const logoDestinationContainerRef = useRef(null);

  const animateLogo = () => {
    const logoContainer = logoContainerRef.current;
    const logoImage = logoImageRef.current;
    const logoDestinationContainer = logoDestinationContainerRef.current;

    const destinationRect = logoDestinationContainer.getBoundingClientRect();
    const parentRect = logoContainer.parentElement.getBoundingClientRect();

    const relativeTop =
      destinationRect.top - parentRect.top + destinationRect.height / 2;
    const relativeLeft =
      destinationRect.left - parentRect.left + destinationRect.width / 2;

    logoContainer.style.top = `${relativeTop}px`;

    setTimeout(() => {
      logoContainer.style.left = `${relativeLeft}px`;
    }, 500);

    logoImage.style.transition = `all 1s ease`;
    logoImage.style.width = `${destinationRect.width}px`;
    logoImage.style.height = `${destinationRect.height}px`;
    logoImage.style.borderRadius = "10px";

    // Fade up the title after the logo animation completes
  };

  const animateVerticalLines = () => {
    const linesContainer = verticalAnimatedLinesRef.current;
    const linesDestinationContainer =
      verticalAnimatedLinesDestinationRef.current;

    const destinationRect = linesDestinationContainer.getBoundingClientRect();
    const parentRect = linesContainer.parentElement.getBoundingClientRect();

    const relativeLeft = destinationRect.left - parentRect.left;

    setTimeout(() => {
      linesContainer.style.left = `${relativeLeft}px`;
      // linesContainer.style.transform = `translateY(-50%)`;
    }, 500);
  };

  const onEnterViewPort = (dir) => {
    console.log("tower section is visible", dir);

    animateLogo();
    animateVerticalLines();

    const backgroundVideo = document.getElementById("background-video");

    if (backgroundVideo) backgroundVideo.style.position = "absolute";

    // Animate combo image with zoom-out effect
    setTimeout(() => {
      setAnimationClass((prev) => ({ ...prev, title: "fade-up" }));

      setTimeout(() => {
        setAnimationClass((prev) => ({ ...prev, description: "fade-up" }));

        setAnimationClass((prev) => ({ ...prev, combo: "zoom-out" }));

        setTimeout(() => {
          setAnimationClass((prev) => ({ ...prev, buttonsRow: "fade-up" }));
        }, 1000);
      }, 1000);
    }, 2500);
  };

  const onLeaveViewPort = (dir) => {
    console.log("tower section is hidden", dir);

    const logoContainer = logoContainerRef.current;
    const logoImage = logoImageRef.current;
    const linesContainer = verticalAnimatedLinesRef.current;

    if (dir === "top") {
      logoContainer.style.top = "-50%";
      logoContainer.style.left = `50%`;

      // Remove specific styles
      logoImage.style.width = "";
      logoImage.style.height = "";
      logoImage.style.borderRadius = "";

      linesContainer.style.left = `50%`;
      linesContainer.style.transform = "";

      setTimeout(() => {
        setAnimationClass(DEFAULT_ANIMATION_CLASSES);
      }, 1000);

      const backgroundVideo = document.getElementById("background-video");

      if (backgroundVideo) backgroundVideo.style.position = "fixed";
    }
  };

  const sectionRef = useInViewPort(onEnterViewPort, onLeaveViewPort);

  return (
    <>
      <Fragment>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Fragment>

      <Container maxWidth="lg" className="gamePreviewSection2">
        <Grid
          container
          spacing={{ xs: 2, sm: 6 }}
          ref={sectionRef}
          sx={{ height: "100%" }}
        >
          <ContentColumn item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
            <div
              ref={logoDestinationContainerRef}
              className="gamePreviewSection2LogoContainer"
            />
            <Title className={animationClass.title} variant="h3">
              Tower Defense <br />
              Simulator
            </Title>
            <Description className={animationClass.description}>
              Hold the line in Fortnite’s intense tower defense clash, where
              strategy meets chaos!
            </Description>

            <ButtonsRow className={animationClass.buttonsRow}>
              <PlayNowButton
                className={`play_now ${animationClass.button}`}
                href={TOWER_DEFENSE_PLAY_LINK}
                target="_blank"
              >
                Play now
              </PlayNowButton>

              <IconButton
                variant="text"
                onClick={() => copyToClipboard(TOWER_DEFENSE_PLAY_LINK)}
                sx={{
                  transition: "all 0.5s ease",
                  "&:hover": { opacity: 0.6 },
                  "&:active": { opacity: 0.6 },
                  "&:focus": { opacity: 0.6 },
                }}
              >
                <img src={share} alt="share" />
              </IconButton>
            </ButtonsRow>
          </ContentColumn>

          <ImageColumn item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
            <VerticalLinesAnchor ref={verticalAnimatedLinesDestinationRef} />

            <Thumbnail
              src={combo}
              alt="combo"
              className={animationClass.combo}
            />
          </ImageColumn>
        </Grid>

        <Box
          ref={verticalAnimatedLinesRef}
          className="gamePreviewSection2VerticalLinesCont"
        >
          <VerticalAnimatedLines />
        </Box>
        <Box
          ref={logoContainerRef}
          className="gamePreviewSectionLogoContainer"
          sx={{ top: "-50%" }}
        >
          <img
            ref={logoImageRef}
            src={hero}
            alt="hero"
            className="gamePreviewSection1Logo"
          />
        </Box>
      </Container>
    </>
  );
}

const ImageColumn = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",

  ["&>img"]: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      maxHeight: theme.spacing(40),
    },
  },
}));
const Thumbnail = styled("img")(({ theme }) => ({
  opacity: 0,
  width: "100%",
  height: "auto",
  objectFit: "contain",
  transform: "scale(2)",
  transition: "opacity 1s ease-in, transform 1s ease-in",
  marginBottom: theme.spacing(3),
}));

const ContentColumn = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "left",
  gap: theme.spacing(2),
  padding: theme.spacing(2, 0),
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: "800",
  fontFamily: "Orbitron",
  opacity: 0,
  transition: "opacity 1s ease-in",
  marginBottom: theme.spacing(2),

  [theme.breakpoints.down("md")]: {
    fontSize: theme.spacing(5),
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(4),
  },
}));
const Description = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: "400",
  opacity: 0,
  transition: "opacity 1s ease-in",
  maxWidth: 400,
  marginBottom: theme.spacing(3),
  fontFamily: "Poppins, sans-serif",

  [theme.breakpoints.down("md")]: {
    fontSize: theme.spacing(2),
  },
}));
const ButtonsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
  marginTop: theme.spacing(3),
  opacity: 0,
  transition: "opacity 1s ease-in",

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
}));
const PlayNowButton = styled(Button)(({ theme }) => ({
  fontFamily: "Poppins",
  color: "#fff",
  fontWeight: 700,
  textTransform: "unset",
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));

const VerticalLinesAnchor = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  // width: 100,
  // height: 100,
  // padding: 10,
  // background: "red",
}));
