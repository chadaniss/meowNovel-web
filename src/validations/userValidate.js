import { toast } from 'react-toastify';
import validator from 'validator';

export const userValidate = (input) => {
  if (!validator.isAlphanumeric(input.userName + '')) {
    return toast.error('Invalid user name');
  }

  if (!validator.isEmail(input.email + '')) {
    return toast.error('Invalid email');
  }

  if (!validator.isAlpha(input.firstName + '')) {
    return toast.error('Invalid first name');
  }

  if (!validator.isAlpha(input.lastName + '')) {
    return toast.error('Invalid last name');
  }

  if (!validator.isAlphanumeric(input.password + '')) {
    return toast.error('Invalid password');
  }

  if (input.password !== input.confirmPassword) {
    return toast.error('Password and confirm password does not match');
  }
};
