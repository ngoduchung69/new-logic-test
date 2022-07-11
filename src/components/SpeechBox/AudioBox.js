import { ImgBox, Img } from "./styles";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import microphoneIcon from "../../../src/assets/images/microphone.png";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const AudioBox = ({ handleClick, listening }) => {
  return (
    <ImgBox onClick={handleClick}>
      {listening ? <Spin indicator={antIcon} /> : <Img src={microphoneIcon} />}
    </ImgBox>
  );
};

export default AudioBox;
