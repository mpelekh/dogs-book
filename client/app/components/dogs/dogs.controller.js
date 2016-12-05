class DogsController {
  constructor(DogsNetworkService, $q, $state) {
    'ngInject';

    const self = this;

    self._$q = $q;
    self._$state = $state;

    self._DogsNetworkService = DogsNetworkService;

    this.name = 'dogs';
  }

  $onInit() {
    const self = this;

    self.filter = {};

    const getSpecificModelData = self._DogsNetworkService.getSpecificModelData.bind(self._DogsNetworkService);
    const { REGIONS_URL, GENDERS_URL, STATUSES_URL, SIZES_URL } = self._DogsNetworkService;

    self._$q
      .all([
        getSpecificModelData(REGIONS_URL).then(regions => regions.data),
        getSpecificModelData(GENDERS_URL).then(genders => genders.data),
        getSpecificModelData(STATUSES_URL).then(statuses => statuses.data),
        getSpecificModelData(SIZES_URL).then(sizes => sizes.data)
      ])
      .then(data => {
        [self.regions, self.genders, self.statuses, self.sizes] = data;

        self.filter.region = self.regions[0];
        self.filter.gender = self.genders[0];
        self.filter.statuses = self.statuses[0];
        self.filter.sizes = self.sizes[0];

      })
      .then(result => {
        setTimeout(() => {
          if ($('[data-toggle="select"]').length) {
            $('[data-toggle="select"]').select2();
          }
          // Checkboxes and Radio buttons
          $('[data-toggle="checkbox"]').radiocheck();
          $('[data-toggle="radio"]').radiocheck();
        }, 0);
      });

    self.getDogs().then(dogs => {
      console.log('dogs', dogs);
      self.dogs = dogs.data;
    });
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
      if (typeof originalFilter[key] === 'object') {
        originalFilter[key] = originalFilter[key].id;
      }
    });

    Object.keys(originalFilter).forEach(key => {
      if (originalFilter[key] !== '-1') {
        preparedFilter[key] = parseInt(originalFilter[key]);
      }
    });

    if (Object.keys(preparedFilter).length === 0) return;

    self._DogsNetworkService.getFilteredDogs(preparedFilter)
      .then(data => {
        //TODO: Implement
        console.log('--- data', data);
      },
      error => {
        //TODO: Implement
        console.log('--- error', error);
      });
  }

  getItemById(id, itemName) {
    const self = this;
    let result = null;

    if (!self[itemName]) return result;

    try {
      result = self[itemName].filter(item => item.id == id)[0];
    } catch (error) {
      console.log(error);
    }

    return result;
  }

  getAdditionalInfoForHeader(text) {
    if (!text) return '';

    return text.length > 50
      ? `${text.substring(0, 50)}...`
      : text;
  }

  redirectToDetails(dogId) {
    const self = this;

    self._$state.go('dog-profile', { dogId });
  }
}

export default DogsController;
