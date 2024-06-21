import { useState } from 'react';
import { Button, Rating, TextField } from '@mui/material';

import { BoxForm } from '../styled/StyledCommentForm';

const CommentForm = () => {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <BoxForm component="form">
      <TextField label="comment" variant="outlined" />
      <Rating
        name="simple-controlled"
        value={ratingValue}
        onChange={(event, newValue) => {
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
