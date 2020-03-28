import {declareValues} from '../primitive_type';

const dataStatus = {
  FAILURE: 0,
  SUCCESS: 1,
  NO_SESSION: 2,
  NO_ACCESS: 3,
  TOKEN_INVALID: 4,
  INTERNAL_SERVER_ERROR: 5,
  INIT: 1001,
  PROCESSING_ERROR: 1002,
  EDITING: 1003,
};

let dataStatusValues = [];
for (let key in dataStatus) {
  dataStatusValues.push(dataStatus[key]);
}

const TDataStatus = declareValues(dataStatusValues);

export default dataStatus;

export {
  TDataStatus,
}
