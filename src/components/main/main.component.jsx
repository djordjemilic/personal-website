import React from "react";
import styled from "styled-components";
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

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <Button />
        <Logo />
        <SocialIcons />
      </Container>
    </MainContainer>
  );
};

export default Main;
