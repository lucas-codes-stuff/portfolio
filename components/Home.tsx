"use client";

import "./styles/home.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const imageSet = {
  aboutMe: ["/about-1.jpeg", "/about-2.jpeg", "/about-3.jpg", "/about-4.jpeg"],
  project: ["/project.jpg"],
  charityCoding: ["/charity.jpg"],
};

interface HoverBoxProps {
  translateX?: string;
  translateY?: string;
  children?: React.ReactNode;
  images?: string[];
  alt: string;
  imageText?: string;
  link: string;
}

const HoverBox: React.FC<HoverBoxProps> = ({
  translateX = "0",
  translateY = "0",
  children,
  images,
  alt,
  imageText,
  link,
}) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [opacity, setOpacity] = React.useState(1);

  const [hovered, setHovered] = React.useState(false);

  React.useEffect(() => {
    if (!images) return;
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setOpacity(1);
      }, 1000);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage, images]);

  const style = {
    transform: `scale(${
      hovered ? "1.08" : "1"
    }) translate(${translateX}, ${translateY})`,
    zIndex: hovered ? "1" : "0",
    transition: "transform 0.3s, z-index 0.3s, box-shadow 0.3s",
    boxShadow: hovered
      ? "0 8px 12px rgba(0, 0, 0, 0.2)"
      : "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <Link
      href={`/${link}`}
      className="box absolute h-72 w-[30rem] overflow-hidden rounded-xl border border-orange-500 bg-transparent"
      style={style}
    >
      <div
        className="box absolute h-72 w-[30rem] overflow-hidden rounded-xl border border-orange-500 bg-transparent"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative h-full w-full">
          {images && images.length > 1 ? (
            <Image
              src={images ? images[currentImage] : ""}
              alt={alt}
              layout="fill"
              objectFit="cover"
              className="box-image"
              style={{ opacity: opacity, transition: "opacity 1s ease-in-out" }}
            />
          ) : (
            <Image
              src={images ? images[0] : ""}
              alt={alt}
              layout="fill"
              objectFit="cover"
              className="box-image !opacity-100"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="shadow-text text-2xl font-bold text-[#FFF7E8]">
              {imageText}
            </span>
          </div>
        </div>
        {children}
      </div>
    </Link>
  );
};

function Home() {
  return (
    <div className="flex h-full w-full flex-col justify-between text-body-text">
      <div className="flex h-auto w-full flex-col space-y-6 pl-9 pt-9">
        <h1 className="text-6xl font-[600]">Lucas Furlong</h1>
        <h1 className="text-5xl font-[400] text-highlight">
          Software Engineer
        </h1>
      </div>
      <div className="relative flex h-1/2 items-center justify-center">
        <HoverBox
          images={imageSet.project}
          translateX="95%"
          translateY="-85%"
          alt="Projects"
          imageText="Projects"
          link="projects"
        ></HoverBox>
        <HoverBox
          images={imageSet.aboutMe}
          alt="About Me"
          imageText="About Me"
          link="about-me"
        ></HoverBox>
        <HoverBox
          images={imageSet.charityCoding}
          translateX="-95%"
          translateY="85%"
          alt="Charity Coding"
          imageText="Charity Coding"
          link="charity"
        ></HoverBox>
      </div>
      <div className="flex h-auto w-full flex-col items-end justify-end space-y-6 pr-9">
        <h1 className="text-6xl">Inspired by Innovation</h1>
        <h1 className="text-6xl">Dedicated to Difference</h1>
        <h1 className="text-6xl font-[500] text-highlight">
          <a>Find out how</a>
        </h1>
      </div>
    </div>
  );
}

export default Home;
