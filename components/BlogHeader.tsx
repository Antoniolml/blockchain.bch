import React from "react";
import Container from "./Container";
import Alinks from "./Alinks";
import Aimage from "./Aimage";
import { shimmer, toBase64 } from "@/utils";

interface BlogHeaderProps {
  title: string;
  date: string;
  readingTime: string;
  imgSrc: string;
  imgAlt: string;
  authorName: React.ReactNode;
  coverImageAttributionText: string;
  coverImageAttributionLink: string;
}

const BlogHeader = ({
  title,
  date,
  readingTime,
  imgSrc,
  imgAlt,
  authorName,
  coverImageAttributionText,
  coverImageAttributionLink,
}: BlogHeaderProps) => {
  return (
    <Container className="mt-32 mb-14">
      <div className="animate-in slide-in-from-left duration-500">
        <div className="mt-2 space-x-2 text-base italic tracking-wide">
          <span>Published:{date}</span>
          <span>&mdash;</span>
          <span>{readingTime}</span>
        </div>
        <h1>{title}</h1>
        <div className="flex flexrow justify-start text-lg md:text-xl">
          <div className="font-medium">
            Written by:{authorName} &mdash; Cover Photo by:
            <Alinks
              dottedLine
              animatedUnderline
              href={coverImageAttributionLink}
            >
              {coverImageAttributionText}
            </Alinks>
          </div>
        </div>
      </div>
      <Aimage
        src={imgSrc}
        width={1200}
        height={630}
        alt={imgAlt}
        className="my-8 h-[280px] w-full rounded-md border border-gray-300 object-cover object-center animate-in fade-in duration-500 md:h-[500px]"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(1200, 630)
        )}`}
      />
    </Container>
  );
};

export default BlogHeader;
