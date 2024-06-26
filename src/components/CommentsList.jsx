import { Rating, Typography } from '@mui/material';

import { CommentBlockModal, CommentDiv } from '../styled/modal/StyledModal';

const CommentsList = (props) => {
  const { comments } = props;
  
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
