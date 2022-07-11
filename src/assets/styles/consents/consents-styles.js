import styled from "styled-components";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

export const StyledCheckOutlined = styled(CheckOutlined)`
  margin-right: 10px;
`;

export const StyledCloseOutlined = styled(CloseOutlined)`
  margin-right: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    font-family: "Oleo Script Swash Caps", cursive;
  }
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

export const ListContainer = styled.div`
  width: 100%;
  box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b;
  border-radius: 10px;
  padding: 10px;
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
    background-color: lightgray;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #525861;
    border-radius: 5px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: ${(props) => (props.bgType ? "lightgray" : "white")};
`;

export const RecordTitle = styled.div`
  font-size: 15px;
  color: black;
  font-weight: bold;
`;

export const RecordLanguage = styled.div`
  color: #5e5873;
  font-size: 12px;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const BigBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ThankyouText = styled.div`
  font-size: 17px;
  text-align: center;
`;

export const ViewAllConsents = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;
