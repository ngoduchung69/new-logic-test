import { ButtonContainer, Error } from "../../assets/styles/home/home-styles";
import TextBox from "../../components/TextBox";
import SelectBox from "../../components/SelectBox";
import ButtonBox from "../../components/ButtonBox";
import useLocalStorage from "../../customHooks/useLocalStorage";
import { useState } from "react";

const Form = ({ changeScreenStatus }) => {
  const [userInfo, setUserInfo] = useLocalStorage("userInfo", {});
  const [name, setName] = useState(userInfo.name);
  const [language, setLanguage] = useState(userInfo.language);
  const [showError, setShowError] = useState(false);

  const handleNext = () => {
    if (name && language) {
      setUserInfo({ name, language });
      changeScreenStatus();
    } else {
      setShowError(true);
    }
  };
  return (
    <>
      <TextBox
        onChange={(value) => setName(value)}
        defaultValue={userInfo.name}
        feedbackStatus={{}}
        id={"name"}
        label={"Name"}
      />
      <br />
      <SelectBox
        defaultvalue={userInfo.language}
        onChange={(value) => setLanguage(value)}
        title={"Language"}
        options={[
          {
            id: "en",
            title: "English",
          },
          {
            id: "fr",
            title: "French",
          },
        ]}
      />
      {showError && <Error>Please fill in all the field above!</Error>}
      <ButtonContainer>
        <ButtonBox onClick={handleNext} content={"Next"} />
      </ButtonContainer>
    </>
  );
};

export default Form;
