import { Dispatch, ReactElement, SetStateAction } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export default function ModalBox(
  { open, setOpen, children }:
  { open:boolean, setOpen:Dispatch<SetStateAction<boolean>>, children: ReactElement }) {

    const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return(
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <button onClick={() => setOpen(false)}>X</button>
        { children }
      </Box>
    </Modal>
  );
}
