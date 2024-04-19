import * as Yup from 'yup';

export const BasicInfoSchema = Yup.object().shape({
  companyName: Yup.string().required('This is a required field'),
  nit: Yup.string().required('This is a required field'),
  streetLine: Yup.string().required('This is a required field'),
  houseLine: Yup.string(),
  postalCode: Yup.number()
    .integer('Value must be an integer')
    .required('This is a required field')
    .positive(),
  city: Yup.string().required('This is a required field'),
});

export const INIT_VALUES = {
  name: '',
  nit: '',
  streetLine: '',
  houseLine: '',
  postalCode: '',
  city: '',
};
