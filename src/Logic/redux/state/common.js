import dataStatus from '../data_status';

// const passData = (type, data) => (Object.assign({type}, data));
const passData = (type, data) => ({...{type}, ...data});
const getApiResponse = (type, data) => {
  return ({type, data});
};
const handleError = (type, e) => {
  return ({type, e});
};
// const handleAccessDenied = (type, data) => ({type, data});
const showLoading = (componentId) => ({type: 'LOADING_TRANSITION_ON', componentId});
const hideLoading = (componentId) => ({type: 'LOADING_TRANSITION_OFF', componentId});

export {passData, getApiResponse, handleError, showLoading, hideLoading}