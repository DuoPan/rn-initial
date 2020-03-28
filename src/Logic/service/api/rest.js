// import getProfile from "@profile";
import resourceList from "./resource_list";
import { AclResource, Resource } from "./resource";

async function parseResponse(response) {
  if (response.json) {
    return await response.json();
  }
  return response;
}

class Rest {
  constructor() {
    this._resources = {};
    this._aclResources = {};
  }

  get resources() {
    return this._resources;
  }

  get aclResources() {
    return this._aclResources;
  }

  getResource(name) {
    if (this._resources.hasOwnProperty(name)) {
      return this._resources[name];
    }
    return null;
  }

  getAclResource(name) {
    if (this._aclResources.hasOwnProperty(name)) {
      return this._aclResources[name];
    }
    return null;
  }

  addResource(name, resource) {
    this._resources[name] = resource;
    return this;
  }

  addAclResource(name, resource) {
    this._aclResources[name] = resource;
    return this;
  }

  async get(resourceName, uri, query = {}) {
    const response = await this.getResource(resourceName).get(uri, query);
    return await parseResponse(response);
  }

  async post(resourceName, uri, postData = {}) {
    const response = await this.getResource(resourceName).post(uri, postData);
    return await parseResponse(response);
  }

  async getAcl(resourceName, uri, query = {}) {
    const response = await this.getAclResource(resourceName).get(uri, query);
    return await parseResponse(response);
  }

  async postAcl(resourceName, uri, postData = {}) {
    const response = await this.getAclResource(resourceName).post(
      uri,
      postData,
    );
    return await parseResponse(response);
  }
}

// Initialize the rest;
// const profile = getProfile();
const rest = new Rest();
// for (let name in resourceList) {
//   if (resourceList.hasOwnProperty(name)) {
//     rest
//       .addResource(
//         resourceList[name],
//         new Resource(profile.resource[resourceList[name]])
//       )
//       .addAclResource(
//         resourceList[name],
//         new AclResource(profile.resource[resourceList[name]])
//       );
//   }
// }

export default rest;
