class DogPostController {
  constructor(DogPostNetworkService) {
    'ngInject';

    const self = this;

    self._DogPostNetworkService = DogPostNetworkService;

    //this.dog = {
    //  status: null
    //};
  }

  $onInit() {
    //TODO:
    const self = this;

    self.dog = {};
    const getSpecificModelData = self._DogPostNetworkService.getSpecificModelData.bind(self._DogPostNetworkService);
    const { REGIONS_URL, GENDERS_URL, STATUSES_URL, SIZES_URL } = self._DogPostNetworkService;

    getSpecificModelData(REGIONS_URL).then(regions => self.regions = regions.data);
    getSpecificModelData(GENDERS_URL).then(genders => self.genders = genders.data);
    getSpecificModelData(STATUSES_URL).then(statuses => self.statuses = statuses.data);
    getSpecificModelData(SIZES_URL).then(sizes => self.sizes = sizes.data);
  }

  postDog(dogModel) {
    const self = this;

    if(dogModel.gender) {
      dogModel.gender = parseInt(dogModel.gender);
    }
    if(dogModel.region) {
      dogModel.region = parseInt(dogModel.region);
    }
    if(dogModel.size) {
      dogModel.size = parseInt(dogModel.size);
    }
    if(dogModel.status) {
      dogModel.status = parseInt(dogModel.status);
    }

    //TODO: mock data.
    dogModel.volounteer_id = 1;

    return self._DogPostNetworkService.postDog(dogModel);
  }
}

export default DogPostController;
