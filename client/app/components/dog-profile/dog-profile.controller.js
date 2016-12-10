class DogProfileController {
  constructor($state) {
    "ngInject";

    this._$state = $state;
  }

  $onInit() {
    const self = this;
    self.dogId = self._$state.params.dogId; 
  }
}

export default DogProfileController;
