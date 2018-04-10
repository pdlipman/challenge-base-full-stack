export const API_ERROR = 'API_ERROR';
export const GET_ORDERS = 'GET_ORDERS';

export function apiError(payload) {
  return {
    type: API_ERROR,
    payload,
  };
}

export function getOrders(payload) {
  return {
    type: GET_ORDERS,
    payload,
  };
}