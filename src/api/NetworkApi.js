import axios from 'axios';
import { isEmpty } from 'lodash';
const NetworkApi = {
  requestTimeout: 100000,
  getDefaultHeaders: () => {
    return {
      "Content-Type": "application/json; charset=UTF-8",
      "Authorization": "fd559f719645be483bc941f7ef3ab5be",
    };
  },

  getHeaders: () => {
    const headers = {
      ...NetworkApi.getDefaultHeaders()
    };
    return headers;
  },

  get: (route, headers) => {
    return new Promise((resolve, reject) => {
      NetworkApi.prepareConfig(route, null, 'get', headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
  },
  post: (route, params, headers) => {
    return new Promise((resolve, reject) => {
      NetworkApi.prepareConfig(route, params, 'post', headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
  },
  put: (route, params, headers) => {
    return new Promise((resolve, reject) => {
      NetworkApi.prepareConfig(route, params, 'put', headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
  },
  delete: (route, headers) => {
    return new Promise((resolve, reject) => {
      NetworkApi.prepareConfig(route, null, 'delete', headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
  },
  prepareConfig: async (url, data, methodType, headers, callback) => {
    const config = {
      method: methodType,
      url,
      data,
      headers: headers || NetworkApi.getDefaultHeaders(),
      timeout: NetworkApi.requestTimeout
    };
    NetworkApi.call(config, callback);
  },
  call: (config, callback) => {
    axios(config)
      .then((response) => {
        callback(null, response.data);
      })
      .catch((error) => {
        const message = NetworkApi.parseError(error);

        callback(message, null);
      });
  },
  parseError: (error) => {
    let modalMessage = error.message;
    let errorStatus = '';
    if (error?.status) {
      errorStatus = error.status;
      if (error.status === 401) {
        return "";
      }
    } else if (error?.response?.data) {
      if (error.response.status === 401) {
        return "UNAUTHORIZED_ERROR";
      }
      if (typeof error.response.data === 'string') {
        modalMessage = `${modalMessage} : ${error.response.data}`;
      } else {
        const { data, errorMessage } = error.response.data;
        if (errorMessage && isValid(errorMessage)) {
          modalMessage = `${modalMessage} : ${errorMessage}`;
        } else if (data && isValid(data)) {
          modalMessage = `${modalMessage} : ${data}`;
        }
      }

      errorStatus = error.response.status;
    }
    const errorMessage = !isEmpty(modalMessage)
      ? modalMessage
      : "SOMETHING_WENT_WRONG";
    return {
      modalMessage: errorMessage,
      status: errorStatus
    };
  }
};

export default NetworkApi;
