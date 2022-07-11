import { useState } from "react";
import { ButtonContainer, Content } from "../../assets/styles/home/home-styles";
import ButtonBox from "../../components/ButtonBox";
import SpeechBox from "../../components/SpeechBox";
import useLocalStorage from "../../customHooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const ReceiveSpeech = () => {
  const navigate = useNavigate();
  const [isAnswerYes, setIsAnswerYes] = useState(false);
  const [base64, setBase64] = useState("");
  const [answer, setAnswer] = useState("");
  const [record, setRecord] = useLocalStorage("record", []);
  const [userInfo, setUserInfo] = useLocalStorage("userInfo", {});
  const handleSave = () => {
    let IsDupplicated = false;
    record.map(({ userInfo: userInfoMap, answer: answerMap }) => {
      const { name: nameMap, language: languageMap } = userInfoMap;
      const { name, language } = userInfo;
      if (
        name === nameMap &&
        language?.selectedId === languageMap?.selectedId &&
        answerMap === answer
      ) {
        IsDupplicated = true;
      }
    });
    if (!IsDupplicated) {
      setRecord((preRecord) => [...preRecord, { userInfo, base64, answer }]);
    }
    navigate("/consents");
  };
  return (
    <>
      <Content>
        You understand by using the site or site services, you agree to be bound
        by this agreement. If you do not accept this agreement in its entirely,
        you must not access or use site or the services.Do you agree to this
        agreement? Please response by saying "Yes" or "No".
      </Content>
      <SpeechBox
        answer={answer}
        setAnswer={setAnswer}
        setBase64={setBase64}
        setIsAnswerYes={setIsAnswerYes}
        isAnswerYes={isAnswerYes}
      />
      {isAnswerYes && (
        <ButtonContainer>
          <ButtonBox onClick={() => setIsAnswerYes(false)} content="Retry" />
          <ButtonBox onClick={handleSave} content="Save" />
        </ButtonContainer>
      )}
    </>
  );
};

export default ReceiveSpeech;
