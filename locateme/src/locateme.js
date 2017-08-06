/*
var createURL = function(latitude, longitude) {
  return 'http://maps.google.com?q=' + latitude + ',' + longitude;
}
*/

var createURL = function(latitude, longitude) {
    if (latitude && longitude)
        return 'http://maps.google.com?q=' + latitude + ',' + longitude;
    return '';
};

var setLocation = function(window, url) {
    window.location = url;
};

var locate = function() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
};

/*
var onError = function() {}
var onSuccess = function() {}
*/

var onError = function(error) {
    document.getElementById('error').innerHTML = error.message;
};

/*
var onSuccess = function(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  createURL(latitude, longitude);
}
*/

var onSuccess = function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var url = createURL(latitude, longitude);
    setLocation(window, url);
};