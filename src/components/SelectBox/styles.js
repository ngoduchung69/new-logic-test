import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
`;

export const OptionContainer = styled.div`
  position: absolute;
  top: 70px;
  z-index: 1;
  background-color: white;
  color: #6e6b7b;
  max-height: ${(props) => (props.open ? "240px" : "0px")};
  width: 100%;
  opacity: ${(props) => (props.open ? "1" : "0")};
  transition: all 0.5s;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  overflow-y: ${(props) => (props.open ? "scroll" : "unset")};
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

export const Option = styled.div`
  transition: all 0.4s;
  padding: 12px 24px;
  cursor: pointer;
  &:hover {
    background-color: #bef9ff;
    color: #3ab3c3;
  }
  color: ${(props) => (props.selected ? "white !important" : "rgb(51,51,51)")};
  background-color: ${(props) =>
    props.selected ? "#01c1d5 !important" : "white"};
`;

export const InputRadio = styled.input`
  display: none;
`;

export const Label = styled.label`
  cursor: pointer;
`;

export const Selected = styled.div`
  padding: 7px 15px;
  cursor: pointer;
  background-color: white;
  border-radius: 3px;
  margin-bottom: 8px;
  color: #6e6b7b;
  border: ${(props) =>
    props.open ? "1px solid #00c1d5" : "1px solid #d8d6de"};
  position: relative;

  order: 0;

  &::after {
    content: "";
    background: url("/drop-down.png");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    height: 100%;
    width: 15px;
    right: 10px;

    top: ${(props) => (props.open ? "-10px" : "12px")};
    transition: all 0.4s;
    transform: ${(props) => (props.open ? "rotateX(180deg)" : "0px")};
  }
`;

export const Title = styled.div`
  color: #5e5873;
  font-size: 0.857rem;
  margin-bottom: 0.2857rem;
`;

export const TitleBox = styled.div`
  width: 100%;
`;
