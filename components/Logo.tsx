import React from "react";

import Alinks from "./Alinks";
import { clsxm } from "@/utils";
import Aimage from "./Aimage";
import logoImage from "../public/logo.svg";

interface LogoProps {
  textSize?: string;
}

const Logo = ({ textSize }: LogoProps) => {
  return (
    <Alinks
      href="/"
      className={clsxm(
        "flex flex-row flex-nowrap items-center justify-start font-bold capitalize text-dark hover:animate-jelly",
        textSize ? textSize : "text-2xl"
      )}
    >
      <span className="sr-only">Sathony Crypto</span>
      <Aimage
        src={logoImage}
        width={100}
        height={100}
        alt="DogeCoin To the moon"
        className="mr-2 h-6 w-6"
      />
      Sathony Crypto
    </Alinks>
  );
};

export default Logo;
