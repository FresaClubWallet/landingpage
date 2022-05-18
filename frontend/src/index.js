import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

Modal.setAppElement("#root");

ReactDOM.render(
  // <GoogleReCaptchaProvider
  //   reCaptchaKey="6LdMofofAAAAAP1daBZxgfPZ-aWvg_-BfusW7X0Q"
  //   language="en"
  //   scriptProps={{
  //     async: false, // optional, default to false,
  //     defer: false, // optional, default to false
  //     appendTo: 'head', // optional, default to "head", can be "head" or "body",
  //     nonce: undefined // optional, default undefined
  //   }}
  // >
  <App />,
  // </GoogleReCaptchaProvider>,
  document.getElementById("root")
);
