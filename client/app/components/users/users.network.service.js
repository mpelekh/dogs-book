class UsersNetworkService {
  constructor($http, API_URL) {
    'ngInject';

    const self = this;

    self.USERS_URL = `${API_URL}/users/`;
    self.REGIONS_URL = `${API_URL}/regions`;
    self.GENDERS_URL = `${API_URL}/genders`;
    self.STATUSES_URL = `${API_URL}/users/statuses`;
    self._$http = $http;
  }

  getUsers() {
    const self = this;
    return self._$http.get(self.USERS_URL);
  }

  getSpecificModelData(modelPath) {
    const self = this;

    return self._$http.get(modelPath);
  }
}

export default UsersNetworkService;
