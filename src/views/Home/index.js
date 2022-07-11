import {
  Container,
  Title,
  Wrapper,
} from "../../assets/styles/home/home-styles";
import { useState } from "react";
import Form from "./Form";
import ReceiveSpeech from "./ReceiveSpeech";

const HomePage = () => {
  const [screenStatus, setScreenStatus] = useState(false);
  const changeScreenStatus = () => {
    setScreenStatus(!screenStatus)
  }
  return (
    <Wrapper>
      <Container>
        <Title>Consents Form</Title>
        {!screenStatus ? (
          <Form changeScreenStatus={changeScreenStatus} />
        ) : (
          <ReceiveSpeech />
        )}
      </Container>
    </Wrapper>
  );
};

export default HomePage;
