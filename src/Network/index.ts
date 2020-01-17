import Axios from "axios";
import {baseUrl} from "../Utils/Config";

const http = Axios.create({
  baseURL: baseUrl,
  headers: {Authorization: "Bearer " + localStorage.getItem('token')}
});


export function setHeaderToken(token: string) {
  http.defaults.headers = {Authorization: "Bearer " + token};
}

export function login(params: any): any {
  post("login", params).then((res: any) => {
    if (res && res.token) {
      localStorage.setItem('token', res.token);
      setHeaderToken(res.token)
    }
  });
}

http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    // toast('Error with the server', 'error');
    // localStorage.removeItem('token');
    // history.push("/");
    return Promise.reject(error);
  }
);
// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  }
);

export function get(url: string, params?: any): Promise<any> {
  return http
    .get(url, {
      params
    })
    .then(res => res.data)
    .catch(reason => {
      console.error(reason.message);
    });
}

export function post(url: string, params?: any): Promise<any> {
  return http
    .post(url, params)
    .then(res => res.data)
    .catch(reason => {
      console.error(reason.message);
    });
}

export function put(url: string, params?: any): Promise<any> {
  return http
    .put(url, params)
    .then(res => res.data)
    .catch(reason => {
      console.error(reason.message);
    });
}

export function deleteReq(url: string, params?: any): Promise<any> {
  return http
    .delete(url, params)
    .then(res => res.data)
    .catch(reason => {
      console.error(reason.message);
    });
}
