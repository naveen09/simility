'use strict';
/**
 * @ngdoc function
 * @name similityApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the similityApp
 */
angular.module('similityApp').controller('mainCtrl', function() {


}).controller('contentCtrl', ['$scope', 'movieService', function(scope, movieService) {
    var vm = this;
    vm.slider = {
        value: 0,
        options: {
            step : 100,
            floor: 0,
            ceil: 450
        }
    };
    vm.items = [{
        "movie_title": "Avatar ",
        "director_name": "James Cameron",
        "actor_1_name": "CCH Pounder",
        "actor_2_name": "Joel David Moore",
        "genres": "Action|Adventure|Fantasy|Sci-Fi",
        "language": "English",
        "country": "USA",
        "content_rating": "PG-13",
        "budget": "237000000",
        "title_year": "2009",
        "plot_keywords": "avatar|future|marine|native|paraplegic",
        "movie_imdb_link": "http://www.imdb.com/title/tt0499549/?ref_=fn_tt_tt_1"
    }, {
        "movie_title": "Avatar ",
        "director_name": "James Cameron",
        "actor_1_name": "CCH Pounder",
        "actor_2_name": "Joel David Moore",
        "genres": "Action|Adventure|Fantasy|Sci-Fi",
        "language": "English",
        "country": "USA",
        "content_rating": "PG-13",
        "budget": "237000000",
        "title_year": "2009",
        "plot_keywords": "avatar|future|marine|native|paraplegic",
        "movie_imdb_link": "http://www.imdb.com/title/tt0499549/?ref_=fn_tt_tt_1"
    }];
    movieService.getData().then(function(data) {
        console.log(data.data);
    })


}]).directive('movie', [function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        replace: true,
        templateUrl: 'views/movie_template.html',
        link: function(scope, iElement, iAttrs) {

        }
    };
}]);