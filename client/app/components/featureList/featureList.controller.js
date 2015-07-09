class FeatureListController {
  constructor(Listings) {
    this.Listings = Listings;
    var vm = this;
    //this.getAllListings()
    //    .then(function() {
    //      vm.listings = vm.Listings.getState();
    //    });


    //vm.primeFeature = {};
    vm.Listings.getFeatureListings(1,4)
        .then(function(data) {
          if (data && data.length > 0) {
            vm.listings = data;
          }
        });

  }

  createListing(content) {
    // other things
    this.Listings.createListing(content);
  }

  getSomeListings(city) {
    return this.Listings.getSomeListings(city);
  }

  getAllListings() {
    return this.Listings.getAllListings();
  }
}

FeatureListController.$inject = ['Listings'];

export {FeatureListController};
