class DogPostNetworkService {
  constructor($http, $state, $q, API_URL) {
    'ngInject';

    const self = this;

    self.DOGS_URL = `${API_URL}/dogs`;
    self.REGIONS_URL = `${API_URL}/regions`;
    self.GENDERS_URL = `${API_URL}/genders`;
    self.STATUSES_URL = `${API_URL}/dogs/statuses`;
    self.SIZES_URL = `${API_URL}/sizes`;

    self._$http = $http;
    self._$state = $state;
    self._$q = $q;
  }

  postDog(dogModel) {
    const self = this;

    return self._$http.put(self.DOGS_URL, dogModel, {headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}})
      .then(data => {
        self._$state.go('dogs');
      })
      .catch(error => {
        console.log(error);
      });
  }

  getSpecificModelData(modelPath) {
    const self = this;

    return self._$http.get(modelPath);
  }
}

export default DogPostNetworkService;
