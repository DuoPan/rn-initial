export default function truncateString(text, length, suffix = "..."): string {
  if (text.length > length) {
    return text.substring(0, length) + suffix;
  }
  return text;
}
