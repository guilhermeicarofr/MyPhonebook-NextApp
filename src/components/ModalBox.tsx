import { Dispatch, ReactElement, SetStateAction } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';

export default function ModalBox(
  { open, setOpen, children }:
  { open:boolean, setOpen:Dispatch<SetStateAction<boolean>>, children: ReactElement }) {

  return(
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <ModalButton onClick={() => setOpen(false)}><ClearIcon /></ModalButton>
        { children }
      </Box>
    </Modal>
  );
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #1C4C71',
  outline: 'none',
  boxShadow: 24,
  p: 4
};

const ModalButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  color: #1C4C71;
  border: none;
  background-color: transparent;
`;
