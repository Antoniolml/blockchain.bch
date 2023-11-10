import Header from "@/components/Header";
import React from "react";

interface WebLayoutProps {
  children?: React.ReactNode;
}

const WebLayout = ({ children }: WebLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default WebLayout;
