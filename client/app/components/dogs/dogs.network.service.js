class DogsNetworkService {
  constructor($http, API_URL) {
    'ngInject';

    const self = this;

    self.DOGS_URL = `${API_URL}/dogs`;
    self.REGIONS_URL = `${API_URL}/regions`;
    self.GENDERS_URL = `${API_URL}/genders`;
    self.STATUSES_URL = `${API_URL}/dogs/statuses`;
    self.SIZES_URL = `${API_URL}/sizes`;

    self._$http = $http;
  }

  getDogs() {
    const self = this;

    return self._$http.get(self.DOGS_URL);
  }

  getSpecificModelData(modelPath) {
    const self = this;

    return self._$http.get(modelPath);
  }

  getFilteredDogs(filter) {
    const self = this;

    return self._$http.post(self.DOGS_URL, filter);
  }

}

export default DogsNetworkService;
