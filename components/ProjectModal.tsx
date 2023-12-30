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
        <div>test123 {id}</div>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
