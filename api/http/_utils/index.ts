import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import { find } from "lodash";
import qs from "qs";
import { HttpError } from "../../../utils/status";
import { Res, ResData } from "./types";

interface CallConfig {
  url: string;
  method: "get" | "post" | "put" | "patch" | "delete";
  data?: Record<string, any>;
  params?: Record<string, any>;
  headers?: Record<string, any>;
}

export const getErateBaseURL = () => {
  if (process.env.NODE_ENV === "development") return "http://127.0.0.1:8080";
  if (process.env.NODE_ENV === "test") return "http://127.0.0.1:8080";
  if (process.env.NODE_ENV === "production") return "http://127.0.0.1:8080";
};

export const getHttpData = <T extends Res>(
  res: AxiosResponse<T>
): [ResData<T>, undefined] => {
  const data = res.data.data ?? true;
  return [data, undefined];
};

export const getHttpErrorCode = (err: AxiosError): [undefined, HttpError] => {
  let error: HttpError;
  if (axios.isCancel(err)) error = HttpError.APP_TIMEOUT;
  else if (err.response) error = getServerError(err.response.status);
  else if (err.request) error = HttpError.APP_REQUEST;
  else error = HttpError.UNKNOWN;

  return [undefined, error];
};

const getServerError = (status: number) => {
  switch (status) {
    case 400:
      return HttpError.SERVER_REQUEST;
    case 401:
      return HttpError.AUTHENTICATION;
    case 403:
      return HttpError.AUTHORIZATION;
    case 403:
      return HttpError.SERVER_TIMEOUT;
    case 500:
      return HttpError.SERVER_ISSUE;
    default:
      return HttpError.SERVER_UNKNOWN;
  }
};

// TODO: Return function that when called will cancel call and pass callback as function argument that will be called by this function when http request is completed. It will pass the data and the error
export const callHtppServer = <T extends Res>(
  config: CallConfig,
  timeOut = 3000
) => {
  const source = axios.CancelToken.source();
  const timeout = setTimeout(() => {
    source.cancel();
  }, timeOut);

  return axios({
    ...config,
    cancelToken: source.token,
    paramsSerializer: (params) => qs.stringify(params),
  })
    .then((res: AxiosResponse<T>) => {
      clearTimeout(timeout);
      return getHttpData<T>(res);
    })
    .catch((err: AxiosError) => {
      clearTimeout(timeout);
      return getHttpErrorCode(err);
    });
};

export const shouldIncludeInQuery = <T extends any[]>(
  includes: T | undefined,
  item: T[number]
) => {
  if (!includes) return undefined;
  find(includes, item) ? true : undefined;
};

export const createAuthHeader = <T extends string>(token: T) =>
  "Bearer " + token;
