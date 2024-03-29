"use client";
import ProjectModal from "@/components/ProjectModal";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { useState } from "react";
import gp from "../../public/game-place.png";
import dd from "../../public/dog-daycare.png";
import dufs from "../../public/dufs.png";
import projects from "../../public/projects.jpg";
import huffman from "../../public/huffman.png";
import hospital from "../../public/hospital.png";
import smos from "../../public/smos.jpg";
import jsm from "../../public/jsm.jpg";
import Image from "next/image";

export default function Projects() {
  const [openModal, setOpenModal] = useState("0");

  const handleOpenModal = (id: string) => {
    setOpenModal(id);
  };

  const handleCloseModal = () => {
    setOpenModal("0");
  };

  return (
    <main className="flex min-h-screen w-screen bg-base lg:h-screen">
      <div className="flex min-h-screen w-full flex-col space-y-2 bg-main-texture p-3 lg:h-screen lg:flex-row lg:space-x-2 lg:space-y-0">
        <div className="flex h-full w-full flex-col space-y-2">
          <div className="flex h-full w-full flex-1 space-x-2">
            <Card className="flex-1">
              <CardActionArea
                onClick={() => {
                  handleOpenModal("1");
                }}
                className="h-full w-full"
              >
                <CardMedia>
                  <div className="h-[50%] w-full">
                    <Image
                      src={gp}
                      layout="fill"
                      objectFit="cover"
                      alt="image for GamePlace"
                      className="p-1"
                    />
                  </div>
                </CardMedia>
                <CardContent className="flex h-full w-full items-center justify-center bg-complementary">
                  <h1 className="z-10 rounded bg-complementary px-1 text-center text-xl font-extrabold text-[#333333]">
                    GamePlace
                  </h1>
                </CardContent>
              </CardActionArea>
            </Card>
            <div className="flex flex-1 flex-col space-y-2">
              <Card className="flex-1">
                <CardActionArea
                  onClick={() => {
                    handleOpenModal("2");
                  }}
                  className="h-full w-full"
                >
                  <CardMedia>
                    <div className="h-[50%] w-full">
                      <Image
                        src={dd}
                        layout="fill"
                        objectFit="cover"
                        alt="image for DDC"
                        className="p-1"
                      />
                    </div>
                  </CardMedia>
                  <CardContent className="flex h-full w-full items-center justify-center bg-complementary">
                    <h1 className="z-10 rounded bg-complementary px-1 text-center text-xl font-extrabold text-[#333333]">
                      Doggy Daycare
                    </h1>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card className="flex-1">
                <CardActionArea
                  onClick={() => {
                    handleOpenModal("3");
                  }}
                  className="h-full w-full"
                >
                  <CardMedia>
                    <div className="h-[50%] w-full">
                      <Image
                        src={dufs}
                        layout="fill"
                        objectFit="cover"
                        alt="image for DUFS"
                        className="p-1"
                      />
                    </div>
                  </CardMedia>
                  <CardContent className="flex h-full w-full items-center justify-center bg-complementary">
                    <h1 className="z-10 rounded bg-complementary px-1 text-center text-xl font-extrabold text-[#333333]">
                      DU File System
                    </h1>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
          <Card className="h-3/5">
            <CardActionArea
              onClick={() => {
                handleOpenModal("4");
              }}
              className="h-full w-full"
            >
              <CardMedia>
                <div className="h-[50%] w-full">
                  <Image
                    src={jsm}
                    layout="fill"
                    objectFit="cover"
                    alt="image for Jamsync"
                    className="p-1"
                  />
                </div>
              </CardMedia>
              <CardContent className="flex h-full w-full items-center justify-center bg-complementary">
                <h1 className="z-10 rounded bg-complementary px-1 text-center text-xl font-extrabold text-[#333333]">
                  JamSync
                </h1>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="flex h-full w-full space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2">
          <Card className="flex-1">
            <CardActionArea
              onClick={() => {
                handleOpenModal("5");
              }}
              className="h-full w-full"
            >
              <CardMedia>
                <div className="h-[50%] w-full">
                  <Image
                    src={hospital}
                    layout="fill"
                    objectFit="cover"
                    alt="image for Hospital Management System"
                    className="p-1"
                  />
                </div>
              </CardMedia>
              <CardContent className="flex h-full w-full items-center justify-center bg-complementary">
                <h1 className="z-10 rounded bg-complementary px-1 text-center text-xl font-extrabold text-[#333333]">
                  Hospital Management System
                </h1>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className="flex-1">
            <CardActionArea
              onClick={() => {
                handleOpenModal("6");
              }}
              className="h-full w-full"
            >
              <CardMedia>
                <div className="h-[50%] w-full">
                  <Image
                    src={smos}
                    layout="fill"
                    objectFit="cover"
                    alt="image for SMOS"
                    className="p-1"
                  />
                </div>
              </CardMedia>
              <CardContent className="flex h-full w-full items-center justify-center bg-complementary">
                <h1 className="z-10 rounded bg-complementary px-1 text-center text-xl font-extrabold text-[#333333]">
                  Sh**ty Memes On Shirts
                </h1>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="flex h-full w-full flex-col space-y-2">
          <Card className="flex-1">
            <CardActionArea
              onClick={() => {
                handleOpenModal("7");
              }}
              className="h-full w-full"
            >
              <CardMedia>
                <div className="h-[50%] w-full">
                  <Image
                    src={huffman}
                    layout="fill"
                    objectFit="cover"
                    alt="image for Huffman Encoding"
                    className="p-1"
                  />
                </div>
              </CardMedia>
              <CardContent className="flex h-full w-full items-center justify-center bg-complementary">
                <h1 className="z-10 rounded bg-complementary px-1 text-center text-xl font-extrabold text-[#333333]">
                  Huffman Coding
                </h1>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className="h-4/5">
            <CardActionArea
              onClick={() => {
                handleOpenModal("8");
              }}
              className="h-full w-full"
            >
              <CardMedia>
                <div className="h-[50%] w-full">
                  <Image
                    src={projects}
                    layout="fill"
                    objectFit="cover"
                    alt="image for Various Projects"
                    className="p-1"
                  />
                </div>
              </CardMedia>
              <CardContent className="flex h-full w-full items-center justify-center bg-complementary">
                <h1 className="z-10 rounded bg-complementary px-1 text-center text-xl font-extrabold text-[#333333]">
                  Various Extras
                </h1>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
      <ProjectModal
        open={openModal !== "0"}
        id={openModal}
        close={handleCloseModal}
      />
    </main>
  );
}
