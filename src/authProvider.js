import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ERROR,
  AUTH_CHECK,
  AUTH_GET_PERMISSIONS,
  fetchUtils
} from "react-admin";

const url = "https://jdatastudio.com";
/**
 * add token before request
 * @param url
 * @param options
 * @returns {*}
 */
export const httpClient = (urlPath, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("token");
  if (token && token !== "undefined") {
    options.headers.set("Authorization", `Bearer ${token}`);
  }
  options.credentials = "same-origin";
  options.mode = "cors";
  return fetchUtils.fetchJson(urlPath, options);
};

export const authProvider = (type, params) => {
  if (type === AUTH_LOGIN) {
    // default by guest,guest
    const { username, password } = params;
    const request = new Request(url + "/auth", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ username, password }),
      headers: new Headers({ "Content-Type": "application/json" })
    });
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ token, roleName }) => {
        localStorage.setItem("token", token);
        localStorage.setItem("permissions", roleName);
      });
  }
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem("token");
    localStorage.removeItem("permissions");
    return Promise.resolve();
  }
  if (type === AUTH_ERROR) {
    const { status } = params;
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      return Promise.reject();
    }
    return Promise.resolve();
  }
  if (type === AUTH_CHECK) {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  }

  if (type === AUTH_GET_PERMISSIONS) {
    return Promise.resolve(localStorage.getItem("permissions"));
  }

  return Promise.reject("Unkown method");
};
