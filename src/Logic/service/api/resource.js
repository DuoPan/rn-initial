import { toUrl, toQueryString } from "./utils";

const aclHeader = "tanggram-access-id";

class Resource {
  constructor(config) {
    this._config = config;
  }

  get config() {
    return this._config;
  }

  async get(uri, queries) {
    const url = toUrl(this.config.baseUrl, uri);
    const queryString = toQueryString(queries);
    const headers = new Headers({
    });
    return await fetch(url + queryString, {
      method: "GET",
      headers: headers,
      credentials: "include",
    });
  }

  async post(uri, postData) {
    const url = toUrl(this.config.baseUrl, uri);
    const headers = new Headers({
      "content-type": "application/json",
    });
    return await fetch(url, {
      method: "POST",
      headers: headers,
      credentials: "include",
      body: JSON.stringify(postData),
    });
  }
}

class AclResource {
  constructor(config) {
    this._config = config;
  }

  get config() {
    return this._config;
  }

  async get(uri, queries) {
    const url = toUrl(this.config.baseUrl, uri);
    const queryString = toQueryString(queries);
    const headers = new Headers({
    });
    return await fetch(url + queryString, {
      method: "GET",
      headers: headers,
      credentials: "include",
    });
  }

  async post(uri, postData) {
    const url = toUrl(this.config.baseUrl, uri);
    const headers = new Headers({
      "content-type": "application/json",
    });
    return await fetch(url, {
      method: "POST",
      headers: headers,
      credentials: "include",
      body: JSON.stringify(postData),
    });
  }
}

export { aclHeader, Resource, AclResource };
