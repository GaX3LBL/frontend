const BASE_URL ='http://localhost:5000';

export const WINES_URL = BASE_URL + '/api/wines';
export const WINES_TAGS_URL = WINES_URL + '/tags';
export const WINES_BY_SEARCH_URL = WINES_URL + '/search/';
export const WINES_BY_TAG_URL = WINES_URL + '/tags/';
export const WINES_BY_ID_URL = WINES_URL + '/';


export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';

export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';
