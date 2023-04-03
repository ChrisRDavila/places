```
Describe: Places();

Test: populatin places with location, landmarks and timeOfYear
Code: let testPlace = new Place ("San Antonio", "the Alamo", "Spring");
Expected Output: Place {location: "San Antonio", landmarks: "the Alamo", timeOfYear: "Spring"}


Test: "Will give us back a full location"
Code: let testPlace = new Place ("Paris", "France")
Expected Output: Place {locationCity: "Paris", locationCountry: "France"}

Describe: TravelLog ()

Test: "Adding a place into our databank for all of our places"
Code: let travelLog = new TravelLog ();
let place = new Place("Paris", "France", "Eiffel Tower", "summer");
let place2 = new Place("Amsterdam", "Netherlands", "The Canals", "fall");
travelLog.addPlace(place);
travelLog.addPlace(place2);
Expected Output: places {place: "Paris", place: "Amsterdam"}

Test: "Assign unique Id to each place"
Code: this.places[place.id] = place;
let place = new Place("Paris", "France", "Eiffel Tower", "summer");
let place2 = new Place("Amsterdam", "Netherlands", "The Canals", "fall");
travelLog.addPlace(place);
travelLog.addPlace(place2);
Expected output: {place: Paris, 0 place: Amsterdam, 1}

Test: "Deletes Id for TravelLog()"
Code: travellog.deletePlace(1);
Expected OutPut: travellog.places;
TravelLog {places:{...}, currentId: 2}
places: {2: Place}
currentId: 2

```