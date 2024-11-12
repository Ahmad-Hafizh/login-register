import * as Yup from 'yup';

export const EditProfileSchema = Yup.object().shape({
  fullName: Yup.string(),
  userName: Yup.string(),
  gender: Yup.string(),
  country: Yup.string(),
  language: Yup.string(),
  timeZone: Yup.string(),
});
