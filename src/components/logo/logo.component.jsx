import React, { Fragment } from "react";
import styled from "styled-components";

const LogoComponent = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.text};
  font-size: 4rem;
  font-weight: 700;
  font-style: italic;
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 3;
`;

const LogoText = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  position: fixed;
  top: 4.6rem;
  left: 4.8rem;
  z-index: 3;
`;

const Logo = () => {
  return (
    <Fragment>
      <LogoComponent>G</LogoComponent>
      <LogoText>eorge</LogoText>
    </Fragment>
  );
};

export default Logo;
