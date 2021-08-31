import styled, { css } from "styled-components";
import { fadeIn } from "../../style/animation";

export const List = styled.ul`
  ${fadeIn()}
  display: flex;
  width: 100%;
  overflow-x: scroll;

  ${(props) =>
    props.fixed &&
    css`{
      background-color: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      position: fixed;
      right: 0;
      top: -5px;
      z-index: 1;
    `}

  &::-webkit-scrollbar {
    width: 10px;
    border: none;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 20px;
    display: none;
  }
  &::-webkit-scrollbar-thumb:hover {
    display: inline-block;
  }
`;

export const Item = styled.li`
  padding: 0 8px;
`;
