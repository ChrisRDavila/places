// Business Logic for Travel Log
function TravelLog() {
  this.places = {};
  this.currentId = 0;
}

TravelLog.prototype.addPlace = function(place){
  place.id = this.assignID();
  this.places[place.id] = place;
};

TravelLog.prototype.assignID = function() {
  this.currentId += 1;
  return this.currentId;
};

TravelLog.prototype.findPlace = function(id) {
  if (this.places[id] !== undefined) {
    return this.places[id];
  }
  return false;
};

// Business Logic for Places
function Place(locationCity, locationCountry, landmarks, timeOfYear) {
  this.locationCity = locationCity;
  this.locationCountry = locationCountry
  this.landmarks = landmarks; 
  this.timeOfYear = timeOfYear;
}

Place.prototype.fullLocation = function() {
  return this.locationCity + ", " + this.locationCountry;
};


