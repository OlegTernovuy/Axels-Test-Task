import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Rating, TextField } from '@mui/material';

import { BoxForm } from '../styled/StyledCommentForm';

interface FormValues {
  comment: string;
  rating: number;
}

const validationSchema = yup.object({
  comment: yup
    .string()
    .min(5, 'Сomment must contain at least 5 char')
    .max(25, 'Сomment should not contain more than 25 char')
    .required('Comment is required'),
  rating: yup.number().min(1, 'Rating is required'),
});

const CommentForm = () => {
  const formik = useFormik({
    initialValues: {
      comment: '',
      rating: 0,
    } as FormValues,
    validationSchema: validationSchema,
    onSubmit: (values: FormValues, { resetForm }) => {
      resetForm();
      console.log(values);
    },
  });

  return (
    <BoxForm onSubmit={formik.handleSubmit}>
      <TextField
        label='comment'
        name='comment'
        variant='outlined'
        value={formik.values.comment}
        onChange={formik.handleChange}
        error={formik.touched.comment && Boolean(formik.errors.comment)}
        helperText={formik.touched.comment && formik.errors.comment}
      />
      <Rating
        name='rating'
        value={Number(formik.values.rating)}
        onChange={formik.handleChange}
      />
      <span>
        {formik.touched.rating && Boolean(formik.errors.rating)
          ? formik.errors.rating
          : null}
      </span>
      <Button variant='outlined' fullWidth type='submit'>
        Submit
      </Button>
    </BoxForm>
  );
};

export default CommentForm;
