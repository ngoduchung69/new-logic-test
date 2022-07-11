import { debounce } from "lodash";
import { useEffect, useRef } from "react";
import { Wrapper, Input, Label, LabelBox } from "./styles.js";
import { ReactComponent as ExclamationPoint } from "../../../src/assets/icons/exclamation-point.svg";

const TextBox = ({
  feedbackStatus: {
    color = "",
    toggleStatus = false,
    feedback = "",
    Icon = null,
  },
  onChange = () => {},
  defaultValue,
  placeHolder,
  id,
  label,
}) => {
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    wrapperRef.current.style.borderColor = color;
  }, [toggleStatus, color, feedback, Icon]);

  const onClick = () => {
    if (!toggleStatus) {
      wrapperRef.current.style.borderColor = "#00c1d5";
      wrapperRef.current.style.boxShadow = "0 3px 10px 0 rgb(34 41 47 / 10%)";
      inputRef.current.focus();
    }
  };

  const onBlur = () => {
    if (!toggleStatus) {
      wrapperRef.current.style.borderColor = "#d8d6de";
      wrapperRef.current.style.boxShadow = "none";
    }
  };

  return (
    <>
      <LabelBox>
        <Label htmlFor={id}>{label}</Label>
      </LabelBox>
      <Wrapper onClick={onClick} ref={wrapperRef}>
        <Input
          id={id}
          defaultValue={defaultValue}
          placeholder={placeHolder}
          onBlur={onBlur}
          ref={inputRef}
          onChange={debounce((e) => onChange(e.target.value), 300)}
        />

        {toggleStatus && (
          <>
            {Icon ? (
              <Icon className="validated-icon" />
            ) : (
              <ExclamationPoint className="validated-icon" />
            )}
          </>
        )}
      </Wrapper>

      {/* {toggleStatus && (
        <div style={{ color: color }} className="validated-feedback">
          {feedback}
        </div>
      )} */}
    </>
  );
};

export default TextBox;
