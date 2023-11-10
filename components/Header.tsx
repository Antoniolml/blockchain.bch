import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <Container
      as="header"
      fullSize
      className="border-b border-white animate-in slide-in-from-top duration-500 lg:border-none fixed top-0 z-[9999] w-full bg-black"
    >
      <Container as="nav" arial-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">Logo</div>{" "}
          <div className="hidden font-medium capitalize lg:inline-flex ">
            <p>Educando</p>
          </div>
          <div className="ml-10 space-x-8">navar</div>
        </div>
      </Container>
    </Container>
  );
};

export default Header;
