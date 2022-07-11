import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid #d8d6de;
  border-radius: 3px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  width: 100%;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  color: #6e6b7b;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.438rem 1rem;
  background-color: #fff;
  width: 100%;
  &:focus {
    padding-left: 1.3rem;
    transition: all 0.2s;
  }
  &::placeholder {
    color: #c9c9d1;
  }
`;

export const Label = styled.label`
  color: #5e5873;
  font-size: 0.857rem;
  margin-bottom: 0.2857rem;
  cursor: pointer;
`;

export const LabelBox = styled.div`
  width: 100%;
`;
