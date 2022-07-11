import styled from "styled-components";
import { Button } from "antd";

export const StyledButton = styled(Button)`
  background-color: #00b0c2;
  border-color: #00b0c2;
  padding: 10px 25px;
  display: flex;
  align-items: center;
  color: white;
  margin: 10px;
  &:hover {
    background-color: #009eaf;
  }
`;
