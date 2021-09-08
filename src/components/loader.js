import React from "react";
import Lottie from "react-lottie";
import Assets from "./../assets"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData:Assets.Animations.Loading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Loader() {
  return (
    <Lottie
      options={defaultOptions}
      height={400}
      width={400}
    />
  );
}
