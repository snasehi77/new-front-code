import {ExecutionConfig} from "../ExecutionConfig";

export function get(url: string, params?: any): Promise<any> {
  return ExecutionConfig.getInstance().http
    .get(url, {
      params
    })
    .then(res => res.data)
    .catch(reason => {
      console.error(reason.message);
    });
}

export function post(url: string, params?: any): Promise<any> {
  return ExecutionConfig.getInstance().http
    .post(url, params)
    .then(res => res.data)
    .catch(reason => {
      console.error(reason.message);
    });
}

export function put(url: string, params?: any): Promise<any> {
  return ExecutionConfig.getInstance().http
    .put(url, params)
    .then(res => res.data)
    .catch(reason => {
      console.error(reason.message);
    });
}

export function deleteReq(url: string, params?: any): Promise<any> {
  return ExecutionConfig.getInstance().http
    .delete(url, params)
    .then(res => res.data)
    .catch(reason => {
      console.error(reason.message);
    });
}
