import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

interface WebLayoutProps {
  children?: React.ReactNode;
}

const WebLayout = ({ children }: WebLayoutProps) => {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
};

export default WebLayout;
