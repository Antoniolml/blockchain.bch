import { clsxm } from "@/utils";
import React from "react";

interface skeleton extends React.HTMLAttributes<HTMLDivElement> {}

const skeleton = ({ className, ...props }: skeleton) => {
  return (
    <div className={clsxm("animate-pulse bg-gray-300", className)} {...props} />
  );
};

export default skeleton;
