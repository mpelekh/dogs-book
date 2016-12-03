class DogsNetworkService {
  constructor($http, API_URL) {
    'ngInject';

    const self = this;
    //TODO: rename to 'dogs'
    self.DOGS_URL = `${API_URL}/users`;

    self._$http = $http;
  }

  getDogs() {
    const self = this;

    return self._$http.get(self.DOGS_URL);
  }
}

export default DogsNetworkService;
