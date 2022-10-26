import React from "react";
import styled from "styled-components";
import { MouseSvg } from "../svg/svg-component";
import { Link } from "react-router-dom";
import "./button.styles.css";

const Power = styled.button`
  position: fixed;
  top: 3.3rem;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fcf6f4;
  border-radius: 50%;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const Button = () => {
  return (
    <Power>
      <Link to="/">
        <MouseSvg />
      </Link>
    </Power>
  );
};

export default Button;
