class DogsFilterController {
  constructor() { }

  $onChanges(changes){
    const self = this;

    if(changes.regions.currentValue) self.regions = [...changes.regions.currentValue];
    if(changes.genders.currentValue) self.genders = [...changes.genders.currentValue];
    if(changes.statuses.currentValue) self.statuses = [...changes.statuses.currentValue];
    if(changes.sizes.currentValue) self.sizes = [...changes.sizes.currentValue];
    if(changes.filter.currentValue) self.filter = {...self.filter}

    // Crutch - change in future.
    setTimeout(() => {
      if ($('[data-toggle="select"]').length) {
        $('[data-toggle="select"]').select2();
      }
      // Checkboxes and Radio buttons
      $('[data-toggle="checkbox"]').radiocheck();
      $('[data-toggle="radio"]').radiocheck();
    }, 0);
  }
}

export default DogsFilterController;
