import resourceList from '../resource_list';
import rest from '../rest';

async function useLogin(postData) {
  return rest.post(resourceList.AUTH, '/account/merchant-login', postData);
}

export default useLogin;