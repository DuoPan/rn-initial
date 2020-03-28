function isUrl(input: string) {
  return /^(http|https):/.test(input);
}

export default isUrl;
