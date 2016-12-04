class DogsController {
  constructor(DogsNetworkService) {
    'ngInject';

    const self = this;

    self._DogsNetworkService = DogsNetworkService;

    this.name = 'dogs';
  }

  $onInit() {
    const self = this;

    self.filter = {};

    const getSpecificModelData = self._DogsNetworkService.getSpecificModelData.bind(self._DogsNetworkService);
    const { REGIONS_URL, GENDERS_URL, STATUSES_URL, SIZES_URL } = self._DogsNetworkService;

    getSpecificModelData(REGIONS_URL).then(regions => {
      self.regions = regions.data;
      self.filter.region = regions.data[0];
    });
    getSpecificModelData(GENDERS_URL).then(genders => {
      self.genders = genders.data;
      self.filter.gender = genders.data[0];
    });
    getSpecificModelData(STATUSES_URL).then(statuses => self.statuses = statuses.data);
    getSpecificModelData(SIZES_URL).then(sizes => self.sizes = sizes.data);

    self.getDogs().then(dogs => {
      self.dogs = dogs;
    });

    //TODO: Remove mock data.
    //const { statuses, genders, sizes, regions } = self.getMockData();
    //
    //self.statuses = statuses;
    //self.genders = genders;
    //self.sizes = sizes;
    //self.regions = regions;
  }

  getDogs() {
    const self = this;

    return self._DogsNetworkService.getDogs();
  }

  filterDogs(filter) {
    const self = this;

    const originalFilter = Object.assign({}, filter);
    const preparedFilter = {};

    Object.keys(originalFilter).forEach(key => {
      if(typeof originalFilter[key] === 'object') {
        originalFilter[key] = originalFilter[key].id;
      }
    });

    Object.keys(originalFilter).forEach(key => {
      if (originalFilter[key] !== '-1') {
        preparedFilter[key] = parseInt(originalFilter[key]);
      }
    });

    if(Object.keys(preparedFilter).length === 0) return;

    self._DogsNetworkService.getFilteredDogs(preparedFilter)
      .then(data => {
        //TODO: Implement
      },
      error => {
        //TODO: Implement
      }
    )
  }
}

export default DogsController;
