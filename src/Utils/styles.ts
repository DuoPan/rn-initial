export default function styles(...args) {
  let _styles = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i]) {
      _styles = {..._styles, ...args[i]};
    }
  }
  return _styles;
}