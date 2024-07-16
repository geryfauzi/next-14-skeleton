"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const AtomPlayerLottie = ({ src, style }: any) => {
  return <DotLottieReact src={src} autoplay={true} loop={true} style={style} />;
};
export default AtomPlayerLottie;
