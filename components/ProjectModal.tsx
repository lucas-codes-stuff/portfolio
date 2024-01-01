import { Box, Modal } from "@mui/material";
import { FC } from "react";

type ModalProps = {
  open: boolean;
  id: string;
  close: () => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#FF7F50",
  boxShadow: 24,
  p: 4,
};

const ProjectModal: FC<ModalProps> = ({ open, id, close }) => {
  return (
    <Modal open={open} onClose={close}>
      <Box sx={style}>
        <div className="flex flex-col">
          <h1 className="text-center text-3xl">Project {id}</h1>
          <p className="mt-3 text-center text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quibusdam, voluptatibus, quia, quod voluptate natus doloribus
            voluptatum quas quos doloremque dolorum? Quisquam quibusdam,
            voluptatibus, quia, quod voluptate natus doloribus voluptatum quas
            quos doloremque dolorum?
          </p>
          <span className="mt-5">
            Github Link: <a></a>
          </span>
        </div>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
