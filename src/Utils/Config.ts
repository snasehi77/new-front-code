const PROD = 'https://apiengine.mrreset.com';
const QA = 'https://dev-ngn.mrreset.com';
export const flow_id = process.env.REACT_APP_ENVIRONMENT === 'PROD' ? 45 : 30;
export const baseUrl = process.env.REACT_APP_ENVIRONMENT === 'PROD' ? PROD : PROD;
export const MRRESET_ENGINE = 'http://engine.mrreset.com';
