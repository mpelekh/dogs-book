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
    const { statuses, genders, sizes } = self.getMockData();

    self.statuses = statuses;
    self.genders = genders;
    self.sizes = sizes;
  }

  getDogs() {
    const self = this;

    return self._DogsNetworkService.getDogs();
  }

  filterDogs() {
    if(!self.dogs) return;

    //TODO: implement.
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

    return {
      statuses,
      genders,
      sizes
    };
  }
}

export default DogsController;
