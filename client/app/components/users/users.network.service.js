class UsersNetworkService {
  constructor($http, API_URL) {
    'ngInject';

    const self = this;

    self.USERS_URL = `${API_URL}/users`;
    self._$http = $http;
  }

  getUsers() {
    const self = this;

    return self._$http.get(self.USERS_URL);
  }
}

export default UsersNetworkService;
