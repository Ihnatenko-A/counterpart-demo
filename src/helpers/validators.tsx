const isEmpty = (value: string) => Boolean(value);

const isEmptyArray = (arr: Array<string>) => Boolean(arr.length);

const isEmail = (value: string) => {
  const emailRegex = RegExp(/\S+@\S+\.\S+/);

  return emailRegex.test(value);
};

export { isEmpty, isEmail, isEmptyArray };
