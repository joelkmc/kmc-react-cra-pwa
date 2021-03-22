import { FormInstance } from 'antd/lib/form';

// **  EmailValidator
export const emailValidator = () => {
  const validator = async (rule: any, value: string) => {
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(String(value).toLowerCase())) {
      throw new Error(rule.error);
    }
  };

  return {
    validator,
    message: 'Enter a valid email!',
  };
};

// Password Validator
export const passwordValidator = () => {
  const validator = async (rule: any, value: string) => {
    // eslint-disable-next-line no-useless-escape
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!passwordRegex.test(String(value))) {
      throw new Error(rule.error);
    }
  };
  return {
    validator,
    message: 'Enter a valid password!',
  };
};

export const noSpecialChars = () => {
  const validator = async (rule: any, value: string) => {
    // eslint-disable-next-line no-useless-escape
    const specialCharsRegex = /^[a-zA-Z0-9]+( [a-zA-Z0-9]+)*$/g;

    if (!specialCharsRegex.test(String(value))) {
      throw new Error(rule.error);
    }
  };

  return {
    validator,
    message: 'Invalid Characters',
  };
};

// Password Validator !!DELETE!!!
export const generateConfirmPassValidator = (form: FormInstance) => {
  const validator = async (rule: any, value: string) => {
    // eslint-disable-next-line no-useless-escape
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!passwordRegex.test(String(value))) {
      throw new Error(rule.error);
    }
  };

  return {
    validator,
    message: 'Enter a valid password!',
  };
};

// Confirm Password Validator
export const confirmPassValidator = (form: FormInstance) => {
  const validator = async (rule: any, value: string) => {
    const password = form.getFieldValue('password');
    if (password !== value) {
      throw new Error(rule.error);
    }
  };

  return {
    validator: validator,
    message: 'Password do not match!',
  };
};

// Numbers Only Allowed Validator
export const numberOnlyValidator = () => {
  const validator = async (rule: any, value: string) => {
    // eslint-disable-next-line no-useless-escape
    const numberRegex = /^[0-9]*$/;
    if (!numberRegex.test(String(value))) {
      throw new Error(rule.error);
    }
  };
  return {
    validator,
    message: 'Only numbers are allowed!',
  };
};

export const inputRequired = (message: string): object => {
  return { required: true, message: `${message} is required!` };
};
