(function(module) {

    module.factory('movieService', movieService);
    movieService.$inject = ['$http', '$log', '$q'];
    var data_url = "http://starlord.hackerearth.com/simility/movieslisting";

    function movieService(http, log, q) {
        return {
            getData: function() {
                var defer = q.defer();
                http.get(data_url).then(function(data) {
                    defer.resolve(data);
                }, function(err) {
                    defer.reject(err);
                });
                return defer.promise;
            }
        }
    }
})(angular.module('similityApp'));