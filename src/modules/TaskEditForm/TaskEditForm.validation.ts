import * as yup from 'yup';

export const editFormValidationSchema = yup.object().shape({
  name: yup.string().required('Это поле обязательное!'),
  info: yup.string().required('Это поле обязательное!'),
  isImportant: yup.bool(),
  isDone: yup.bool(),
});
