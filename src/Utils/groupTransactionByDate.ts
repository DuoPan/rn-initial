function groupTransactionByDate(transactions) {
  let collections = {};
  transactions.forEach(element => {
    let key = element.createdAt.substring(0,10);
    let date = new Date(key.substring(0,10));
    key = date.toUTCString().substring(0,16);
    if (key in collections) {
      collections[key].push(element);
    } else {
      collections[key] = [element];
    }
  });

  return Object.keys(collections)
    .sort(function(num){ return -num;})
    .reduce((acc, key) => ({
      ...acc, [key]: collections[key]
    }), {});
}

export default groupTransactionByDate;
