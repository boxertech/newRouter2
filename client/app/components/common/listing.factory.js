import _ from 'lodash';


let count = 0;

let Listings = ($http, $q) => {
  let listings = [];
  const api = 'http://localhost:3000/listings';

  let getAllListings = () => {
    return $http.get(api)
      .then(({data}) => {
        listings = data;
      });
  };

  let getState = () => {
    return listings;
  }

  let getSomeListings = (city) => {
    return _.find(listings, {city});
  };

  let getFeatureListings = (start, end) => {
    var featured = [];
    var deferred = $q.defer();

    getAllListings().then(function() {
      listings.forEach(function(listing) {
        if (listing.featured === true) {
          featured.push(listing);
        }
      });

      deferred.resolve(featured.slice(start, end));
    })

    return deferred.promise;
  };

  return {
    createListing(content) {
      let note = {content, id: ++count};
      listings.push(note);
    },
    getAllListings,
    getSomeListings,
    getState,
    getFeatureListings
  };
};

//PrimaryFeatureController.$inject = ['Listings'];

export {Listings};
