class PrimaryFeatureController {
  constructor(Listings) {
    this.Listings = Listings;
    var vm = this;
    vm.primeFeature = {};
    vm.Listings.getFeatureListings(0,1)
    .then(function(data) {
          if (data && data.length > 0) {
            vm.primeFeature = data[0];
          }
        });

    //console.log('prime feature: ', vm.primeFeature);
  }
}

PrimaryFeatureController.$inject = ['Listings'];

export {PrimaryFeatureController};
