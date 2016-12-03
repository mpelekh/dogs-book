class UsersController {
  constructor(UsersNetworkService) {
    'ngInject';

    const self = this;

    self._UsersNetworkService = UsersNetworkService;

    this.name = 'users';
  }

  $onInit() {
    const self = this;

    self.getUsers().then(users => {
      //TODO: remove data
      self.users = users.data;
    });
  }

  getUsers() {
    const self = this;

    return self._UsersNetworkService.getUsers();
  }
}

export default UsersController;
