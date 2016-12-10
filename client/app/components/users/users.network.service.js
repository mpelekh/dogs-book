const cache = {};

class UsersNetworkService {
  constructor($http, $q, API_URL) {
    'ngInject';

    const self = this;

    self.USERS_URL = `${API_URL}/users`;
    self.REGIONS_URL = `${API_URL}/regions`;
    self.GENDERS_URL = `${API_URL}/genders`;
    self.STATUSES_URL = `${API_URL}/users/statuses`;
    self._$http = $http;
    self._$q = $q;
  }

  getUsers() {
    const self = this;
    return self._$http.get(self.USERS_URL);
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
}

export default UsersNetworkService;
