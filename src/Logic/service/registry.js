export default (function() {
  const _items = new Map();

  function register(key, value) {
    _items.set(key, value);
  }

  function unregister(key) {
    _items.delete(key);
  }

  function get(key, defaultValue = null) {
    if (_items.has(key)) {
      return _items.get(key);
    }
    return defaultValue;
  }

  function getAll() {
    return _items.entries();
  }

  function clear() {
    _items.clear();
  }

  return {
    register,
    unregister,
    get,
    getAll,
    clear,
  }
})();