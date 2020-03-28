function toUrl(baseUrl, uri) {
  const urlRegex = /^http(s)?:\/\/.+/;
  if (urlRegex.test(uri)) {
    return uri;
  }
  return `${baseUrl}${uri}`;
}

function toQueryString(query) {
  // Query = { key: value}
  const encode = encodeURIComponent;
  return (
    "?" +
    Object.keys(query)
      .map(k => encode(k) + "=" + encode(query[k]))
      .join("&")
  );
}

export { toUrl, toQueryString };
