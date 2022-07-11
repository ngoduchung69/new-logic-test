import { useState } from "react";
import {
  InputRadio,
  Option,
  OptionContainer,
  Label,
  Selected,
  Wrapper,
  Title,
  TitleBox,
} from "./styles";

const SelectBox = ({
  options = [],
  title,
  onChange = () => {},
  defaultvalue = {
    selectedId: "",
    selectedTitle: "Select Language",
  },
}) => {
  const [selected, setSelected] = useState(defaultvalue);
  const [open, setOpen] = useState(false);

  const openSelectBox = (event) => {
    event.stopPropagation();
    setOpen(!open);
  };
  const { selectedId, selectedTitle } = selected;
  return (
    <Wrapper>
      <TitleBox>
        <Title>{title}</Title>
      </TitleBox>
      <Selected
        onClick={openSelectBox}
        onBlur={() => setOpen(false)}
        selected={selectedId}
        open={open}
      >
        {selectedTitle}
      </Selected>
      <OptionContainer open={open} selected={selectedId}>
        {options.map(({ id, title }) => (
          <Option
            onClick={(e) => {
              onChange({ selectedId: id, selectedTitle: title });
              setSelected({ selectedId: id, selectedTitle: title });
              setOpen(false);
            }}
            selected={selectedId === id}
            key={id}
          >
            <InputRadio
              value={selectedId === id}
              type="radio"
              id={id}
              name="category"
            />
            <Label htmlFor={id}>{title}</Label>
          </Option>
        ))}
      </OptionContainer>
    </Wrapper>
  );
};

export default SelectBox;
