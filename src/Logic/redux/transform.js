import dataStatus from './data_status';

function transformApiData(data) {
  let mappedData = {};
  // Connection error, front end error, ...etc.
  if (!data.hasOwnProperty('state')) {
    mappedData.status = dataStatus.PROCESSING_ERROR;
    mappedData.errors = [data.message];
    return mappedData;
  }

  // Map the returned json object from api api.
  mappedData.status = parseInt(data.state, 10);
  if (data.hasOwnProperty('data')) {
    mappedData.data = data.data;
  }
  if (data.hasOwnProperty('errors')) {
    mappedData.errors = [];
    for (let i = 0; i < data.errors.length; i++) {
      if (data.errors[i].message) {
        mappedData.errors.push(data.errors[i].message)
      }
    }
  }
  return mappedData;
}

function transformActionError(initData, data) {
  return Object.assign(initData, {
    error: [data.e],
  });
}

export {
  dataStatus,
  transformApiData,
  transformActionError,
}