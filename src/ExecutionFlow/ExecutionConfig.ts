import {AxiosInstance} from "axios";

let http: AxiosInstance;

export function initialize(httpInstance: AxiosInstance) {
  console.log("Instance initialized");
  http = httpInstance;
}

export class ExecutionConfig {
  private static instance: ExecutionConfig;
  public http: AxiosInstance;

  private constructor() {
    this.http = http;
  }

  public static getInstance(): ExecutionConfig {
    if (!ExecutionConfig.instance) {
      ExecutionConfig.instance = new ExecutionConfig();
    }
    return ExecutionConfig.instance;
  }
}
