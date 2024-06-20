import { Button, Rating, TextField } from "@mui/material";
import React from "react";
import { BoxForm } from "../styled/StyledCommentForm";

const CommentForm = () => {
  const [ratingValue, setRatingValue] = React.useState(0);

  return (
    <BoxForm component="form">
      <TextField label="comment" variant="outlined" />
      <Rating
        name="simple-controlled"
        value={ratingValue}
        onChange={(newValue) => {
          setRatingValue(newValue);
        }}
      />
      <Button variant="outlined" type="submit">
        Submit
      </Button>
    </BoxForm>
  );
};

export default CommentForm;
