import axios from 'axios';

import { API_URL } from '../config/config';
import * as orderActions from '../actions/orderActions';

export function addOrder({ make, model, trimPackage, customerId }) {
  return dispatch => axios
    .post(`${API_URL}/order/add-order`, { make, model, trimPackage, customerId })
    .then(response => window.location.href = '/')
    .catch(error => apiError(dispatch, error.response));
}

export function getOrders() {
  return dispatch => axios
    .get(`${API_URL}/order/get-orders`)
    .then(response => dispatch(orderActions.getOrders(response.data.orders)))
    .catch(error => apiError(dispatch, error.response));
}

function apiError(dispatch, error) {
  const errorMessage = error;
  dispatch(orderActions.apiError(errorMessage));
}