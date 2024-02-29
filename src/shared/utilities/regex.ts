import { TRegexResult } from '../types/utilities';

export const checkPassword = (password: string): TRegexResult => {
  const findUppercase = /[A-ZА-ЯЁ]/;
  const findSomeNumber = /\d/;

  if (password.length < 6) {
    return { result: false, message: 'Пароль должен содержать не менее 6 символов' };
  }

  if (password.length > 40) {
    return { result: false, message: 'Пароль должен содержать не более 40 символов' };
  }

  if (!findUppercase.test(password)) {
    return { result: false, message: 'Пароль должен содержать хотя бы одну заглавную букву' };
  }

  if (!findSomeNumber.test(password)) {
    return { result: false, message: 'Пароль должен содержать хотя бы одну цифру' };
  }

  return { result: true };
};

export const checkPhone = (phone: string): TRegexResult => {
  const findNumbers = /^\+?\d+$/;

  if (phone.length < 10) {
    return { result: false, message: 'Телефон должен содержать не менее 10 символов' };
  }

  if (phone.length > 15) {
    return { result: false, message: 'Телефон должен содержать не более 15 символов' };
  }

  if (!findNumbers.test(phone)) {
    return { result: false, message: 'Телефон должен содержать только цифры' };
  }

  return { result: true };
};

export const checkEmail = (email: string): TRegexResult => {
  const findEmail = /^[A-Za-z0-9-_]+@[A-Za-z0-9-]+\.[A-Za-z]{2,}$/;

  if (!findEmail.test(email)) {
    return { result: false, message: 'Некорректный email, повторите попытку. Пример: 9hXU0@example.com' };
  }

  return { result: true };
};

export const checkLogin = (login: string): TRegexResult => {
  const isOnlyNumbers = /^\d+$/;
  const findSpaces = /\s/;
  const findAnotherSymbols = /^[a-zA-Z0-9_-]*$/;

  if (login.length < 3) {
    return { result: false, message: 'Логин должен содержать не менее 3 символов' };
  }

  if (login.length > 20) {
    return { result: false, message: 'Логин должен содержать не более 20 символов' };
  }

  if (findSpaces.test(login)) {
    return { result: false, message: 'Логин не может содержать пробелы' };
  }

  if (isOnlyNumbers.test(login)) {
    return { result: false, message: 'Логин не может содержать только цифры' };
  }

  if (!findAnotherSymbols.test(login)) {
    return {
      result: false,
      message: 'Логин может содержать только латинские буквы, цифры, дефис и нижнее подчеркивание',
    };
  }

  return { result: true };
};

export const checkName = (name: string): TRegexResult => {
  const isFirstLetterInUppercase = /^[A-ZА-ЯЁ]/;
  const findSpaces = /\s/;
  const findNumbers = /^\+?\d+$/;
  const findAnotherSymbols = /^[a-zA-Zа-яА-Я-]*$/;

  if (!isFirstLetterInUppercase.test(name)) {
    return { result: false, message: 'Имя должно начинаться с заглавной буквы' };
  }

  if (findSpaces.test(name)) {
    return { result: false, message: 'Имя не может содержать пробелы' };
  }

  if (findNumbers.test(name)) {
    return { result: false, message: 'Имя не может содержать только цифры' };
  }

  if (!findAnotherSymbols.test(name)) {
    return { result: false, message: 'Имя может содержать только латиницу, кириллицу и дефис' };
  }

  return { result: true };
};
