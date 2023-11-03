import { clsxm } from "@/utils";
import React from "react";

interface ContainerProps {
  fullSize?: boolean;
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

const Container = ({
  fullSize,
  children,
  className,
  as = "div",
}: ContainerProps) => {
  const Container = as;

  return (
    <Container
      className={clsxm(
        "mx-auto px-4",
        fullSize ? "max-w-full px-0" : "max-w-6xl",
        className
      )}
    >
      {children}
    </Container>
  );
};

export default Container;
