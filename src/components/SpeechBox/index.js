import React, { useState, useEffect, useCallback } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useReactMediaRecorder } from "react-media-recorder";
import { RecordWrapper, Wrapper } from "./styles";
import AudioBox from "./AudioBox";
import RecordBox from "../RecordBox";
import useLocalStorage from "../../customHooks/useLocalStorage";
import { allowArray } from "../../configs/constant";
import { blobToBase64 } from "../../configs/util";

const SpeechBox = ({
  isAnswerYes,
  setIsAnswerYes,
  setBase64,
  setAnswer,
  answer,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [userInfo, setUserInfo] = useLocalStorage("userInfo", {});
  const [showTranscript, setShowTranscript] = useState(true);
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  useEffect(() => {
    if (!listening) {
      handleStop();
    }
  }, [listening]);
  const getPlayRecord = async (blob) => {
    const base64 = await blobToBase64(blob);
    setBase64(base64);
  };
  const playRecordingFeedback = useCallback(async (blobUrl, blob) => {
    const playRecordedAudio = getPlayRecord(blob);

    await playRecordedAudio();
  }, []);
  const {
    startRecording,
    stopRecording,
    pauseRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({
    video: false,
    audio: true,
    echoCancellation: true,
    onStop: playRecordingFeedback,
  });

  const handleStart = () => {
    SpeechRecognition.startListening({
      language: userInfo?.language?.selectedId,
    });
    if (!isActive) {
      startRecording();
    } else {
      pauseRecording();
    }
    setIsActive(true);
    setShowTranscript(true);
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
    pauseRecording();
    stopRecording();
    setIsActive(false);
    setShowTranscript(false);
    if (
      allowArray.yes.includes(transcript.toLowerCase()) ||
      allowArray.no.includes(transcript.toLowerCase())
    ) {
      setAnswer(transcript.toLowerCase());
      setIsAnswerYes(true);
    }
  };

  const handleClick = (e) => {
    if (!isActive) {
      setIsActive(!isActive);
      handleStart(e);
    } else {
      setIsActive(!isActive);
      handleStop(e);
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <Wrapper>
      {isAnswerYes ? (
        <RecordWrapper>
          <RecordBox mediaBlobUrl={mediaBlobUrl} />
          <div style={{ marginLeft: "10px" }}>You response "{answer}"</div>
        </RecordWrapper>
      ) : (
        <>
          <AudioBox listening={listening} handleClick={handleClick} />
          {showTranscript && <div>{transcript}</div>}
        </>
      )}
    </Wrapper>
  );
};
export default SpeechBox;
