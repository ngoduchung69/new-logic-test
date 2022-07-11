import styled from "styled-components";

export const ImgBox = styled.div`
  height: ${(props) => (props.small ? "20px" : "40px")};
  width: ${(props) => (props.small ? "20px" : "40px")};
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b;
  background-color: white;
`;

export const Img = styled.img`
  height: ${(props) => (props.small ? "10px" : "20px")};
  width: ${(props) => (props.small ? "10px" : "20px")};
`;
