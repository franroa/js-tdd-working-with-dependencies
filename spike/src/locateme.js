var locale = function () {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            var url = "http://maps.google.com/?=" + latitude + ',' +  longitude;
            window.location = url;
        },

        function () {
            document.getElementById('error').innerHTML = 'unable to get your location';
        }
    );
};