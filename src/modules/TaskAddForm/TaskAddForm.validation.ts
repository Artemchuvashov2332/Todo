import * as yup from 'yup';

export const addFormValidationSchema = yup.object().shape({
  name: yup.string().required('Это поле обязательное!'),
  info: yup.string().required('Это поле обязательное!'),
  isImportant: yup.bool(),
});
