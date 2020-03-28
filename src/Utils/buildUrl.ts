export default function buildUrl(
  host: string,
  path: string,
  params: object,
): string {
  const hostString = host.endsWith("/") ? host : host + "/";
  const pathString = path === null ? "" : path;
  const searchString = Object.entries(params)
    .map(([key, value]) => {
      const encodedValue = value === null ? "" : encodeURIComponent(value);
      return key + "=" + encodedValue;
    })
    .join("&");
  return hostString + pathString + "?" + searchString;
}
