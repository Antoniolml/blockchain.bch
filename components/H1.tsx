import { clsxm } from "@/utils";
import React, { HTMLAttributes, ReactNode } from "react";

interface H1HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}

const H1Heading = ({ className, children, ...props }: H1HeadingProps) => {
  return (
    <h1
      className={clsxm(
        "text-4xl font-bold tracking-normal md:text-7xl lg:text-8xl"
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default H1Heading;
