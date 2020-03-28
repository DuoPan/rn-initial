function isMoney(input: string) {
  const result = /^[0-9]+(\.[0-9]{1,2})?$/.test(input);
  if (result && input.length >= 2) {
    if (input[0] === "0" && input[1] !== ".") {
      return false;
    }
  }
  return result;
}

export default isMoney;
