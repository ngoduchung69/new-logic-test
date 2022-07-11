import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    font-family: "Oleo Script Swash Caps", cursive;
  }
`;

export const Error = styled.div`
  width: 100%;
  color: red;
  text-align: center;
`;

export const Container = styled.div`
  padding: 20px;
  /* box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b; */
  width: 350px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 40px;
  margin-right: 15px;
`;

export const Content = styled.div`
  font-size: 15px;
`;
