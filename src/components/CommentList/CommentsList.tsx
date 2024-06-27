import { Rating, Typography } from '@mui/material';

import { CommentBlockModal, CommentDiv } from '../../styled/modal/StyledModal';
import { IComment } from '../../types';

export interface propsComments {
  comments: IComment[];
}

const CommentsList = ({ comments }: propsComments) => {
  
  return (
    <CommentBlockModal>
      {comments &&
        comments.map((comment) => (
          <CommentDiv key={comment.commentId}>
            <Typography variant='body2'>{comment.commentText}</Typography>
            <Rating name='read-only' value={comment.rating} readOnly />
          </CommentDiv>
        ))}
    </CommentBlockModal>
  );
}

export default CommentsList;
