class DogPostController {
  constructor(DogPostNetworkService) {
    'ngInject';

    const self = this;

    self._DogPostNetworkService = DogPostNetworkService;

    this.name = 'dogPost';
  }

  $onInit() {
    const self = this;
    const getSpecificModelData = self._DogPostNetworkService.getSpecificModelData;
    const { REGIONS_URL, GENDERS_URL, STATUSES_URL, SIZES_URL } = self._DogPostNetworkService;

    getSpecificModelData(REGIONS_URL).then(regions => self.regions = regions);
    getSpecificModelData(GENDERS_URL).then(genders => self.genders = genders);
    getSpecificModelData(STATUSES_URL).then(statuses => self.statuses = statuses);
    getSpecificModelData(SIZES_URL).then(sizes => self.sizes = sizes);
  }

  postDog(dogModel) {
    const self = this;

    return self._DogPostNetworkService.postDog(dogModel);
  }
}

export default DogPostController;
