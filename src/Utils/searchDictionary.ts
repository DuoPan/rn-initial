function searchDictionary(array, id) {
  return array.find(function(elem) {
    if (elem.value === id) {
      return elem;
    }
    return null;
  });
}

export default searchDictionary;
