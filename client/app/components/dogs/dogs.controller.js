class DogsController {
  constructor(DogsNetworkService, $q) {
    'ngInject';

    const self = this;

    self._$q = $q;

    self._DogsNetworkService = DogsNetworkService;

    this.name = 'dogs';
  }

  $onInit() {
    const self = this;

    self.filter = {};

    const getSpecificModelData = self._DogsNetworkService.getSpecificModelData.bind(self._DogsNetworkService);
    const { REGIONS_URL, GENDERS_URL, STATUSES_URL, SIZES_URL } = self._DogsNetworkService;

    // getSpecificModelData(REGIONS_URL).then(regions => {
    //   self.regions = regions.data;
    //   self.filter.region = regions.data[0];
    // });
    // getSpecificModelData(GENDERS_URL).then(genders => {
    //   self.genders = genders.data;
    //   self.filter.gender = genders.data[0];
    // });
    // getSpecificModelData(STATUSES_URL).then(statuses => self.statuses = statuses.data);
    // getSpecificModelData(SIZES_URL).then(sizes => self.sizes = sizes.data);

    self._$q.all([
      getSpecificModelData(REGIONS_URL).then(regions => {
        self.regions = regions.data;
        self.filter.region = regions.data[0];
        return regions.data;
      }),
      getSpecificModelData(GENDERS_URL).then(genders => {
        self.genders = genders.data;
        self.filter.gender = genders.data[0];
        return genders.data;
      }),
      getSpecificModelData(STATUSES_URL).then(statuses => {
        self.statuses = statuses.data;
        return statuses.data;
      }),
      getSpecificModelData(SIZES_URL).then(sizes => {
        self.sizes = sizes.data;
        return sizes.data;
      })
    ])
      .then(data => {
        self.filter.region = data[0][0];
        self.filter.gender = data[1][0];
        self.filter.statuses = data[2][0];
        self.filter.sizes = data[3][0];
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

    console.log('--- preparedFilter', preparedFilter);


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

    if(!self[itemName]) return null;

    let result = null;

    try {
      result = self[itemName].filter(item => item.id == id)[0];
    } catch (error) {
      console.log(error);
    }

    return result;
  }
}

export default DogsController;
