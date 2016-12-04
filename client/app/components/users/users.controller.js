class UsersController {
  constructor(UsersNetworkService) {
    'ngInject';

    const self = this;

    self._UsersNetworkService = UsersNetworkService;

    this.name = 'users';
  }

  $onInit() {
    const self = this;

    self.filter = {};

    self.getUsers().then(users => {
      //TODO: remove data
      self.users = users.data;
    });

    const getSpecificModelData = self._UsersNetworkService.getSpecificModelData.bind(self._UsersNetworkService);
    const { REGIONS_URL, GENDERS_URL, STATUSES_URL, SIZES_URL } = self._UsersNetworkService;

    getSpecificModelData(REGIONS_URL).then(regions => {
      self.regions = regions.data;
      self.filter.region = regions.data[0];
    });
    getSpecificModelData(GENDERS_URL).then(genders => {
      self.genders = genders.data;
      self.filter.gender = genders.data[0];
    });
    getSpecificModelData(STATUSES_URL).then(statuses => {
      self.statuses = statuses.data
    });
  }

  getUsers() {
    const self = this;

    return self._UsersNetworkService.getUsers();
  } 
}

export default UsersController;
