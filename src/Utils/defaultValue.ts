export default function defaultValue(value, defaultValue = '') {
  if (value === undefined || value === null) {
    return defaultValue;
  }
  return value;
}