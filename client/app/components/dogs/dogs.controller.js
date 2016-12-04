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

    //TODO: uncomment.
    //const getSpecificModelData = self._DogsNetworkService.getSpecificModelData;
    //const { REGIONS_URL, GENDERS_URL, STATUSES_URL, SIZES_URL } = self._DogsNetworkService;
    //
    //getSpecificModelData(REGIONS_URL).then(regions => self.regions = regions);
    //getSpecificModelData(GENDERS_URL).then(genders => self.genders = genders);
    //getSpecificModelData(STATUSES_URL).then(statuses => self.statuses = statuses);
    //getSpecificModelData(SIZES_URL).then(sizes => self.sizes = sizes);

    self.getDogs().then(dogs => {
      //TODO: remove data
      self.dogs = dogs.data;
    });

    //TODO: Remove mock data.
    const { statuses, genders, sizes, regions } = self.getMockData();

    self.statuses = statuses;
    self.genders = genders;
    self.sizes = sizes;
    self.regions = regions;
  }

  getDogs() {
    const self = this;

    return self._DogsNetworkService.getDogs();
  }

  filterDogs(filter) {
    debugger;
    const self = this;

    const preparedFilter = {};

    Object.keys(filter).forEach(key => {
      if (filter[key] !== '-1') {
        preparedFilter[key] = filter[key];
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

  getMockData() {
    const statuses = [
      {
        id: 1,
        name: 'terminovo'
      },
      {
        id: 2,
        name: 'shykaje peretrymku'
      },
      {
        id: 3,
        name: 'shukaje dim'
      }
    ];

    const genders = [
      {
        id: 1,
        name: 'male'
      },
      {
        id: 2,
        name: 'female'
      }
    ];

    const sizes = [
      {
        id: 1,
        name: 'small'
      },
      {
        id: 2,
        name: 'medium'
      },
      {
        id: 3,
        name: 'big'
      }
    ];
    const regions = [
      {
        id: 1,
        name: 'syhivskyj'
      },
      {
        id: 2,
        name: 'shevchenkivskyj'
      }
    ];

    return {
      statuses,
      genders,
      sizes,
      regions
    };
  }
}

export default DogsController;
