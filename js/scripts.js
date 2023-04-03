// Business Logic for Travel Log
function TravelLog() {
  this.places = {};
  this.placeId = 0;
}

TravelLog.prototype.addPlace = function(place){
  this.places[place.locationCity] = place;
};

TravelLog.prototype.assignID = function() {
  this.currentId += 1;
  return this.currentId;
}

// Business Logic for Places
function Place(locationCity, locationCountry, landmarks, timeOfYear) {
  this.locationCity = locationCity;
  this.locationCountry = locationCountry
  this.landmarks = landmarks; 
  this.timeOfYear = timeOfYear;
}

Place.prototype.fullLocation = function() {
  return this.locationCity + ", " + this.locationCountry;
}


