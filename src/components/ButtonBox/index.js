import { StyledButton } from "./styles";

const ButtonBox = ({ content, onClick }) => {
  return (
    <StyledButton type="primary" onClick={onClick}>
      {content}
    </StyledButton>
  );
};

export default ButtonBox;
