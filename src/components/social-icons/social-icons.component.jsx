import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Github } from "../svg/svg-component";

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 10rem;
  background-color: ${(props) => props.theme.text};
`;

const SocialIcons = () => {
  return (
    <IconsContainer>
      <div>
        <Link
          target="_blank"
          to={{ pathname: "https://github.com/djordjemilic" }}
        >
          <Github width={25} height={25} />
        </Link>
      </div>
      <div>
        <Link
          target="_blank"
          to={{ pathname: "https://github.com/djordjemilic" }}
        >
          <Github width={25} height={25} />
        </Link>
      </div>
      <div>
        <Link
          target="_blank"
          to={{ pathname: "https://github.com/djordjemilic" }}
        >
          <Github width={25} height={25} />
        </Link>
      </div>
      <div>
        <Link
          target="_blank"
          to={{ pathname: "https://github.com/djordjemilic" }}
        >
          <Github width={25} height={25} />
        </Link>
      </div>
      <Line />
    </IconsContainer>
  );
};

export default SocialIcons;
