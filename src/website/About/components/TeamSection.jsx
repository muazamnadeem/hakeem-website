import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ceo from "../../../assets/images/ceo.png"; // Replace with actual image URLs

const TeamSectionContainer = styled(Box)(({ theme }) => ({
  marginTop: "50px",
  textAlign: "center",
}));

const TeamTitle = styled(Typography)(({ theme }) => ({
  color: "#ffffff",
  fontFamily: "Orbitron",
  fontWeight: "900",
  fontSize: "48px",
  marginBottom: "64px",
  lineHeight: "125%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px !important",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "32px !important",
  },
}));

const MemberBox = styled(Box)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  padding: "20px",
  borderRadius: "10px",
  gap: "24px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    padding: "0px",
    marginBottom: "24px",
    textAlign: "left",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    padding: "0px",
    marginBottom: "24px",
    textAlign: "left",
  },
}));

const MemberImage = styled(Box)(({ theme }) => ({
  marginBottom: "20px",
  width: "196px",
  [theme.breakpoints.down("sm")]: {
    width: "103px",
    height: "120px",
    marginRight: "15px",
  },
  [theme.breakpoints.down("md")]: {
    width: "103px",
    height: "120px",
    marginRight: "15px",
  },
}));

const MemberDetails = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
  },
}));

const MemberName = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontFamily: "Poppins",
  fontWeight: "700",
  fontSize: "24px",
  marginBottom: "10px",
  [theme.breakpoints.down("sm")]: {
    lineHeight: "150%",
    fontSize: "16px",
  },
  [theme.breakpoints.down("md")]: {
    lineHeight: "150%",
    fontSize: "16px",
  },
}));

const MemberRole = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "600",
  marginBottom: "16px",
}));

const MemberDescription = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: "400",
  color: "#fff",
  lineHeight: "150%",
}));

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Deepak Chandrasekaran",
      role: "CEO & Founder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique leo et nibh egestas porttitor.",
      image: ceo,
    },
    {
      name: "John Doe",
      role: "CTO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod auctor neque, vel eleifend ex pellentesque nec.",
      image: ceo, // Replace with actual image URL
    },
    {
      name: "Jane Smith",
      role: "COO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus arcu nec vehicula varius.",
      image: ceo, // Replace with actual image URL
    },
    {
      name: "Emily Brown",
      role: "Marketing Director",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis vehicula felis, vel placerat metus.",
      image: ceo, // Replace with actual image URL
    },
    {
      name: "Michael Johnson",
      role: "Lead Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus metus vel arcu efficitur malesuada.",
      image: ceo, // Replace with actual image URL
    },
    {
      name: "Sarah Williams",
      role: "Design Lead",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum enim id magna luctus, sed sagittis nisi mollis.",
      image: ceo, // Replace with actual image URL
    },
  ];

  return (
    <TeamSectionContainer className="team_section">
      <TeamTitle variant="h3" className="adventure_title">
        Our Team
      </TeamTitle>
      <Grid container spacing={3}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MemberBox>
              <MemberImage component="img" src={member.image} alt={member.name} />
              <MemberDetails>
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                <MemberDescription>{member.description}</MemberDescription>
              </MemberDetails>
            </MemberBox>
          </Grid>
        ))}
      </Grid>
    </TeamSectionContainer>
  );
};

export default TeamSection;
