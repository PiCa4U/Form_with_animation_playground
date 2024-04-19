import * as Yup from 'yup';

export const OftenSchema = Yup.object().shape({
  amount: Yup.string().required('This is a required field'),
  frecuency: Yup.string().required('This is a required field'),
  typeOfGoods: Yup.string().required('This is a required field'),
  otherGoods: Yup.string(),
});

export const OTHER_INIT_VALUES = {
  amount: '',
  frecuency: '',
  typeOfGoods: '',
  otherGoods: '',
};
