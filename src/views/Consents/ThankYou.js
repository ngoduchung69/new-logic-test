import { ProfileOutlined } from "@ant-design/icons";
import {
  BigBox,
  ThankyouText,
  ViewAllConsents,
} from "../../assets/styles/consents/consents-styles";

const ThankYou = ({ changeScreenStatus }) => {
  return (
    <BigBox>
      <ProfileOutlined style={{ marginBottom: "20px", fontSize: "30px" }} />
      <ThankyouText>
        Thank you, your consent has been successfully saved
      </ThankyouText>

      <ViewAllConsents onClick={changeScreenStatus}>
        View all consents
      </ViewAllConsents>
    </BigBox>
  );
};

export default ThankYou;
