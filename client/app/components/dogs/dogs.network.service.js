const cache = {};

class DogsNetworkService {
  constructor($http, $q, API_URL) {
    'ngInject';

    const self = this;

    self.DOGS_URL = `${API_URL}/dogs`;
    self.REGIONS_URL = `${API_URL}/regions`;
    self.GENDERS_URL = `${API_URL}/genders`;
    self.STATUSES_URL = `${API_URL}/dogs/statuses`;
    self.SIZES_URL = `${API_URL}/sizes`;

    self._$http = $http;
    self._$q = $q;
  }

  getDogs() {
    const self = this;

    return self._$http.get(self.DOGS_URL);
  }

  getSpecificModelData(modelPath) {
    const self = this;

    if(cache[modelPath]) {
      return self._$q.resolve(cache[modelPath]);
    }

    return self._$http
      .get(modelPath)
      .then(result => cache[modelPath] = result);
  }

  getFilteredDogs(filter) {
    const self = this;
    return self._$http.post(self.DOGS_URL, filter);
  }

}

export default DogsNetworkService;
