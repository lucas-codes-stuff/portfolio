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
  mobileTranslateX?: string;
  mobileTranslateY?: string;
  position?: string;
  children?: React.ReactNode;
  images?: string[];
  alt: string;
  imageText?: string;
  link: string;
}

const HoverBox: React.FC<HoverBoxProps> = ({
  translateX = "0",
  translateY = "0",
  mobileTranslateX = "0",
  mobileTranslateY = "0",
  position,
  children,
  images,
  alt,
  imageText,
  link,
}) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [opacity, setOpacity] = React.useState(1);

  const [hovered, setHovered] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Function to update the state based on the screen width
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    // Check on mount and add event listener for resize
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    // ${
    //   !isMobile
    //     ? `translate(${translateX}, ${translateY})`
    //     : `translate(${mobileTranslateX}, ${mobileTranslateY})`
    // }
    // transform: `scale(${hovered ? "1.08" : "1"}) `,
    zIndex: hovered ? "1" : "0",
    transition: "transform 0.3s, z-index 0.3s, box-shadow 0.3s",
    boxShadow: hovered
      ? "0 8px 12px rgba(0, 0, 0, 0.2)"
      : "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <Link
      href={`/${link}`}
      className={`box absolute h-36 w-[25rem] transform ${
        position === "1"
          ? "translate-y-[-105%] lg:translate-x-[95%] lg:translate-y-[-85%]"
          : position === "3"
          ? "translate-y-[105%] lg:translate-x-[-95%] lg:translate-y-[85%]"
          : ""
      } overflow-hidden rounded-xl border border-orange-500 bg-transparent md:h-40 md:w-[45rem] lg:h-40 lg:w-[20rem] xl:h-64 xl:w-[25rem] 2xl:h-72 2xl:w-[30rem]`}
      style={style}
    >
      <div
        className="box absolute h-36 w-[25rem] overflow-hidden rounded-xl border border-orange-500 bg-transparent md:h-40 md:w-[45rem] lg:h-40 lg:w-[20rem] xl:h-64 xl:w-[25rem] 2xl:h-72 2xl:w-[30rem]"
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
        <h1 className="text-3xl font-[600] md:text-4xl lg:text-5xl xl:text-6xl">
          Lucas Furlong
        </h1>
        <h1 className="text-3xl font-[400] text-highlight md:text-4xl lg:text-5xl xl:text-6xl">
          Software Engineer
        </h1>
      </div>
      <div className="relative flex h-1/2 items-center justify-center">
        <HoverBox
          position="1"
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
          position="3"
          images={imageSet.charityCoding}
          translateX="-95%"
          translateY="85%"
          alt="Charity Coding"
          imageText="Charity Coding"
          link="charity"
        ></HoverBox>
      </div>
      <div className="flex h-auto w-full flex-col items-end justify-end space-y-6 pr-9">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Inspired by Innovation
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Dedicated to Difference
        </h1>
        <h1 className="text-3xl font-[500] text-highlight md:text-4xl lg:text-5xl xl:text-6xl">
          <a>Find out how</a>
        </h1>
      </div>
    </div>
  );
}

export default Home;
