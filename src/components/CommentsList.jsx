import React from "react";
import { CommentBlockModal, CommentDiv } from "../styled/StyledModal";
import { Rating, Typography } from "@mui/material";

const CommentsList = () => {
  return (
    <CommentBlockModal>
      {Array.from(Array(3)).map((_, index) => (
        <CommentDiv key={index}>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
            quae?
          </Typography>
          <Rating name="read-only" value={3} readOnly />
        </CommentDiv>
      ))}
    </CommentBlockModal>
  );
};

export default CommentsList;
