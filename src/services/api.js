import {API_URL,SENDBIRD_APP_ID} from 'react-native-dotenv';

export const test_api = 'https://mhealthbank-backend-api-test.azurewebsites.net';
export const dev_api = 'https://mhealthbank-backend-api.azurewebsites.net';
export const mhealthbank_api = API_URL;
export const env = mhealthbank_api == dev_api ? 0 : 1;
export const sendbird_cs_id = 'mhealthbank.customerservice';




// Sendbird
// const APP_ID = '078105E7-BD8C-43C9-A583-59E334353965';
// export const APP_ID = env == 0 ? APP_ID_DEV : APP_ID_TEST;

const APP_ID_TEST = '6326359B-A992-4EB5-A877-C638B374240C';
const APP_ID_DEV = 'A9788F68-62AB-4947-A8D6-7FD1BEF2AC73';
export const APP_ID = SENDBIRD_APP_ID;