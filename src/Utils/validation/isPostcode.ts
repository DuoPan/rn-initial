function isPostcode(input: string) {
  return /^[0-9]{0,4}$/.test(input);
}

export default isPostcode;
