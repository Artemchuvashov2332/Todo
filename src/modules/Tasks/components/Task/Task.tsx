import React from 'react';
import { Link } from 'react-router-dom';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import DoneIcon from '@mui/icons-material/Done';
import ModeIcon from '@mui/icons-material/Mode';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Stack } from '@mui/material';
import { TaskProps } from './Task.types';
import {
  StyledImportantButton,
  StyledCompletedButton,
  StyledListItemText,
  StyledDeleteButton,
  StyledLinkButton,
  StyledTaskBox,
} from './Task.styled';
import { EDIT, ROOT } from 'constants/index';

export function Task({ task, onChangeCompleted, onChangeImportant, deleteTask }: TaskProps) {
  const { name, info, isImportant, isDone, id } = task;

  return (
    <>
      <StyledTaskBox>
        <StyledListItemText isImportant={isImportant} isDone={isDone} primary={name} />

        <Stack component="div" direction="row" spacing={0.5}>
          <StyledImportantButton
            type="button"
            size="small"
            isImportant={isImportant}
            onClick={() => onChangeImportant(id, isImportant)}
            disabled={isDone}>
            <PriorityHighIcon fontSize="small" />
          </StyledImportantButton>

          <StyledCompletedButton
            type="button"
            size="small"
            isDone={isDone}
            onClick={() => onChangeCompleted(id, isDone)}>
            <DoneIcon fontSize="small" />
          </StyledCompletedButton>

          <StyledDeleteButton type="button" size="small" onClick={() => deleteTask(id)}>
            <DeleteOutlineIcon fontSize="small" />
          </StyledDeleteButton>

          <Link to={`${ROOT}${EDIT}/${id}`}>
            <StyledLinkButton size="small">
              <ModeIcon fontSize="small" />
            </StyledLinkButton>
          </Link>
        </Stack>
      </StyledTaskBox>
      <StyledListItemText isImportant={isImportant} isDone={isDone} primary={info} />
    </>
  );
}
