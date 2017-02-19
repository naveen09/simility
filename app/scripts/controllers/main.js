'use strict';
/**
 * @ngdoc function
 * @name similityApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the similityApp
 */
angular.module('similityApp').controller('mainCtrl', function() {}).controller('contentCtrl', ['$scope', 'movieService', function(scope, movieService) {
    var vm = this;
    vm.mask = true;
    vm.grid = true;
    vm.radioModel = 'Left';
    vm.checkModel = {
        left: false,
        middle: true,
        right: false
    };
    vm.slider = {
        value: 0,
        options: {
            step: 1000000,
            floor: 0,
            ceil: 1000000000
        }
    };
    vm.filter = '$';
    vm.search = {
        "movie_title": '',
        "genres": '',
        "budget": ''
    };
    movieService.getData().then(function(result) {
        console.log(result.data);
        vm.items = result.data
        vm.mask = false;
    })
    scope.toggleContent = function(state) {
        console.log(state)
    }
}]).directive('movie', [function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        replace: true,
        templateUrl: 'views/movie_template.html',
        link: function(scope, iElement, iAttrs) {}
    };
}]).filter('USD', function() {
    return function(value) {
        return value / 1000000 + " M";
    }
}).filter('ellipse', function() {
    return function(value) {
        if (value.length > 10) return value.substring(0, 10) + "...";
        return value;
    }
});