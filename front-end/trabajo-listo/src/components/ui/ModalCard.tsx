import React, { ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent } from "@mui/material";
import { MdClose } from "react-icons/md";
type RecomendacionesCardProps = {
  children: ReactNode;
  onClose?: () => void;
};

const ModalCard: React.FC<RecomendacionesCardProps> = ({
  children,
  onClose,
}) => {
  return (
    <Dialog
      className="z-40 "
      open={true}
      onClose={onClose}
      fullWidth={true}
      maxWidth="lg"
    >
      <DialogContent className="relative w-full">{children}</DialogContent>
      <DialogActions>
        <button
          className="top-1 right-1 z-50 absolute bg-main-red hover:bg-main-hover p-1 rounded-full"
          onClick={onClose}
        >
          <MdClose className="text-main-blue" />
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalCard;
