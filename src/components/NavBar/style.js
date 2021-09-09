import styled from "styled-components";
import { Link as LinkNav } from "@reach/router";
import { fadeIn } from "../../style/animation";

export const Nav = styled.nav`
  align-items: center;
  background-color: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  width: 100%;
  z-index: 1100000;
`;

export const Link = styled(LinkNav)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &[aria-current] {
    color: #000;

    &:after {
      ${fadeIn({ time: "0.5s" })};
      content: ".";
      position: absolute;
      bottom: 5px;
      font-size: 34px;
      line-height: 20px;
    }
  }
`;
