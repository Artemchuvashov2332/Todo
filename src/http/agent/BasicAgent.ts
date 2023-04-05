import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class BasicAgent {
  protected _http: AxiosInstance;

  constructor(url: string, config?: AxiosRequestConfig) {
    this._http = axios.create({
      baseURL: url,
      ...config,
    });
  }
}
