const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const baseUrl = 'https://ya-praktikum.tech/api/v2';

interface queryInterface {
  [index: number | string]: string;
}

interface HTTPTransportOptionsInterface {
  [index: string]: any;
}

function queryStringify(data: queryInterface): string {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce(
    (result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`,
    '?',
  );
}

export default class HTTPTransport {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  get = (url = '/', options: HTTPTransportOptionsInterface = {}) => this.request(
    baseUrl + this.url + url,
    {
      ...options,
      method: METHODS.GET,
    },
    options.timeout,
  );

  post = (url = '/', options: HTTPTransportOptionsInterface = {}) => this.request(
    baseUrl + this.url + url,
    {
      ...options,
      method: METHODS.POST,
    },
    options.timeout,
  );

  put = (url = '/', options: HTTPTransportOptionsInterface = {}) => this.request(
    baseUrl + this.url + url,
    {
      ...options,
      method: METHODS.PUT,
    },
    options.timeout,
  );

  delete = (url = '/', options: HTTPTransportOptionsInterface = {}) => this.request(
    baseUrl + this.url + url,
    {
      ...options,
      method: METHODS.DELETE,
    },
    options.timeout,
  );

  request = (
    url: string,
    options: HTTPTransportOptionsInterface = {},
    timeout = 5000,
  ) => {
    const { headers = {}, method, data } = options;
    console.log('alla', url, data, timeout);
    return new Promise((resolve, reject) => {
      if (!method) {
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.timeout = timeout;
      xhr.withCredentials = true;
      xhr.responseType = 'json';

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
