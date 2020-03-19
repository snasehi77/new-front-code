declare var process: {
  env: {
    [key: string]: string;
  };
};

export const baseUrl = process.env.REACT_APP_BASE_URL;
export const flow_id = process.env.REACT_APP_FLOW_ID;
