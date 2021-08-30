import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  width: 100%;
  overflow-x: scroll;
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
