class DogPostController {
  constructor(DogPostNetworkService) {
    'ngInject';

    const self = this;

    self._DogPostNetworkService = DogPostNetworkService;

    this.name = 'dogPost';
  }

  $onInit() {
    //TODO:
    const self = this;
    //const getSpecificModelData = self._DogPostNetworkService.getSpecificModelData;
    //const { REGIONS_URL, GENDERS_URL, STATUSES_URL, SIZES_URL } = self._DogPostNetworkService;
    //
    //getSpecificModelData(REGIONS_URL).then(regions => self.regions = regions);
    //getSpecificModelData(GENDERS_URL).then(genders => self.genders = genders);
    //getSpecificModelData(STATUSES_URL).then(statuses => self.statuses = statuses);
    //getSpecificModelData(SIZES_URL).then(sizes => self.sizes = sizes);

    const { statuses, genders, sizes } = self.getMockData();

    self.statuses = statuses;
    self.genders = genders;
    self.sizes = sizes;
  }

  postDog(dogModel) {
    const self = this;

    return self._DogPostNetworkService.postDog(dogModel);
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

export default DogPostController;
