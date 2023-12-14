import Webcam from "react-webcam";

function WebCamera() {
  const videoConstraints = {
    facingMode: "user",
  };

  return <Webcam videoConstraints={videoConstraints} />;
}

export default WebCamera;
