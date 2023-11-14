import React from "react";
import Container from "./Container";

interface BlogSection {
  posts: any;
}

const BlogSection = () => {
  return (
    <Container as="section">
      <div></div>
    </Container>
  );
};

export default BlogSection;
