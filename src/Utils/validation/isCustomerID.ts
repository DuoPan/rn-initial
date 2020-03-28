function isCustomerID(input: string) {
  return /^[0-9]{0,6}$/.test(input);
}

export default isCustomerID;
