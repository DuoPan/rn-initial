import {userLogin} from './state/user_login';

const passData = (type, data) => (Object.assign({type}, data));
const getApiResponse = (type, data) => ({type, data});
const handleError = (type, e) => ({type, e});
const showLoading = (componentId) => ({type: 'LOADING_TRANSITION_ON', componentId});
const hideLoading = (componentId) => ({type: 'LOADING_TRANSITION_OFF', componentId});

export {
  passData,
  getApiResponse,
  handleError,
  showLoading,
  hideLoading,
  userLogin,
}
