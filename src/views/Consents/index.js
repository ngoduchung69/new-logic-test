import {
  Container,
  Title,
  Wrapper,
} from "../../assets/styles/consents/consents-styles";
import { useState } from "react";
import ThankYou from "./ThankYou";
import ListRecords from "./ListRecords";

const ConsentsPage = () => {
  const [screenStatus, setScreenStatus] = useState(false);
  const changeScreenStatus = () => {
    setScreenStatus(!screenStatus);
  };
  return (
    <Wrapper>
      <Container>
        <Title>Consents Form</Title>
        {!screenStatus ? (
          <ThankYou changeScreenStatus={changeScreenStatus} />
        ) : (
          <ListRecords />
        )}
      </Container>
    </Wrapper>
  );
};

export default ConsentsPage;
