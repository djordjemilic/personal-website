import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Button from "../button/button.component";
import Logo from "../logo/logo.component";
import SocialIcons from "../social-icons/social-icons.component";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(Link)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const ContactText = styled.h2``;
const BlogText = styled.h2``;
const WorkText = styled.h2``;
const AboutText = styled.h2``;
const SkillsText = styled.h2``;
const CenterText = styled.span`
  font-size: 2rem;
  font-style: italic;
`;

const Blog = styled(Link)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const Work = styled(Link)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
from{
  transform: rotate(0);
}
to {
  transform: rotate(360deg);
}
`;

const BottomContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const About = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const Skills = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const CenterContainer = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > :first-child {
    animation: ${rotate} infinite 3s linear;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <Button />
        <Logo />
        <SocialIcons />
        <CenterContainer>
          <CenterText>click me</CenterText>
        </CenterContainer>
        <Contact>
          <ContactText>Say hi..</ContactText>
        </Contact>
        <Blog to="/blog">
          <BlogText>Blog.</BlogText>
        </Blog>
        <Work to="/work">
          <WorkText>Work.</WorkText>
        </Work>

        <BottomContainer>
          <About to="/about">
            <AboutText>About.</AboutText>
          </About>
          <Skills to="/skills">
            <SkillsText>Skills.</SkillsText>
          </Skills>
        </BottomContainer>
      </Container>
    </MainContainer>
  );
};

export default Main;
