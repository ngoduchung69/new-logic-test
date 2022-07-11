import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  * {
    font-family: "Oleo Script Swash Caps", cursive;
  }
`;

export const HeaderBox = styled.div`
  box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  top: 10px;
  left: 10px;
  width: 98%;
`;

export const MenuBox = styled.div`
  display: flex;
`;

export const MenuItem = styled.div`
  transition: all 0.4s;
  padding: 20px;
  width: 100px;
  cursor: pointer;
  border-top: 2px solid #00c1d5;
  border-color: ${(props) => (props.selected ? "#00c1d5 " : "white")};
  text-align: center;
  background-image: ${(props) =>
    props.selected
      ? "linear-gradient(to top, #ffffff, #f5fcff, #dffcff, #c2feff, #a9ffff) !important"
      : "white"};
`;
