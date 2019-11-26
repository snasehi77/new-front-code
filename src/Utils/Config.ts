const PROD = 'https://dev-ngn.mrreset.com';
const QA = 'https://dev-ngn.mrreset.com';
export const baseUrl = process.env.REACT_APP_ENVIRONMENT === 'PROD' ? PROD : QA;
