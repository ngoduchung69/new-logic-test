import { ImgBox, Img } from "./styles";
import playIcon from "../../../src/assets/images/play.png";
import pauseIcon from "../../../src/assets/images/pause.png";
import { useRef, useState } from "react";

const RecordBox = ({ mediaBlobUrl, base64, small }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleClick = () => {
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
      videoRef.current.onended = function () {
        setIsPlaying(false);
      };
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <ImgBox small={small} onClick={handleClick}>
      {!isPlaying ? (
        <Img small={small} src={playIcon} />
      ) : (
        <Img small={small} src={pauseIcon} />
      )}
      <video
        ref={videoRef}
        style={{ display: "none" }}
        src={mediaBlobUrl || base64}
      />
    </ImgBox>
  );
};

export default RecordBox;
