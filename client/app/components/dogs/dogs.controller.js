class DogsController {
  constructor(DogsNetworkService) {
    'ngInject';

    const self = this;

    self._DogsNetworkService = DogsNetworkService;

    this.name = 'dogs';
  }

  $onInit() {
    const self = this;

    self.getDogs().then(dogs => {
      //TODO: remove data
      self.dogs = dogs.data;
    });
  }

  getDogs() {
    const self = this;

    return self._DogsNetworkService.getDogs();
  }

  filterDogs() {
    if(!self.dogs) return;

    //TODO: implement.
  }
}

export default DogsController;
