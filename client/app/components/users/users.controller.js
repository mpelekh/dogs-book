class UsersController {
  constructor(UsersNetworkService,$q) {
    'ngInject';

    const self = this;

    self._$q = $q;

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

    self._$q.all([
      getSpecificModelData(REGIONS_URL).then(regions => {
      self.regions = regions.data;
      self.filter.region = regions.data[0];
      return regions.data
    }),
    getSpecificModelData(STATUSES_URL).then(statuses => {
      self.statuses = statuses.data;
      self.filter.status = statuses.data[0]
      return statuses.data
    })
    ]).then(data => {
        self.filter.region = data[0][0];
        self.filter.statuses = data[1][0];
      }).then(result => {
        setTimeout(() => {
          if ($('[data-toggle="select"]').length) {
            $('[data-toggle="select"]').select2();
          }
          // Checkboxes and Radio buttons
          $('[data-toggle="checkbox"]').radiocheck();
          $('[data-toggle="radio"]').radiocheck();
        }, 0);
      });
  }

  getUsers() {
    const self = this;

    return self._UsersNetworkService.getUsers();
  } 
}

export default UsersController;
