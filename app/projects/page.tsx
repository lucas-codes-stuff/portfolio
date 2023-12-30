"use client";
import ProjectModal from "@/components/ProjectModal";
import { Card, CardActionArea, CardContent } from "@mui/material";
import { useState } from "react";

export default function Projects() {
  const [openModal, setOpenModal] = useState("0");

  const handleOpenModal = (id: string) => {
    setOpenModal(id);
  };

  const handleCloseModal = () => {
    setOpenModal("0");
  };

  return (
    <main className="flex h-screen w-screen bg-base">
      <div className="flex h-screen w-screen flex-row space-x-2 bg-main-texture p-3">
        <div className="flex h-full w-full flex-col space-y-2">
          <div className="flex h-full w-full flex-1 space-x-2">
            <Card className="flex-1">
              <CardActionArea
                onClick={() => {
                  handleOpenModal("1");
                }}
                className="h-full w-full"
              >
                <CardContent></CardContent>
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
                  <CardContent></CardContent>
                </CardActionArea>
              </Card>
              <Card className="flex-1">
                <CardActionArea
                  onClick={() => {
                    handleOpenModal("3");
                  }}
                  className="h-full w-full"
                >
                  <CardContent></CardContent>
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
              <CardContent></CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="flex h-full w-full flex-col space-y-2">
          <Card className="flex-1">
            <CardActionArea
              onClick={() => {
                handleOpenModal("5");
              }}
              className="h-full w-full"
            >
              <CardContent></CardContent>
            </CardActionArea>
          </Card>
          <Card className="flex-1">
            <CardActionArea
              onClick={() => {
                handleOpenModal("6");
              }}
              className="h-full w-full"
            >
              <CardContent></CardContent>
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
              <CardContent></CardContent>
            </CardActionArea>
          </Card>
          <Card className="h-4/5">
            <CardActionArea
              onClick={() => {
                handleOpenModal("8");
              }}
              className="h-full w-full"
            >
              <CardContent></CardContent>
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
