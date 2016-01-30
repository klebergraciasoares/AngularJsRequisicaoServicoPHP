var app = angular.module('myApp', ['ui.bootstrap']);

app.filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
});

	app.controller('customersCrtl', function ($scope, $http, $timeout) {
    $http.get('http://imediato.gestaoconex.com/api/v1/news?page=1').success(function(data){
		
        //$scope.list = data;
        $scope.list = data._embedded.news;
		
        $scope.currentPage = 1; //página corrente
        $scope.entryLimit = 2; //maximo de linha por página
        $scope.filteredItems = $scope.list.length; //Inicializa o filtro
        $scope.totalItems = $scope.list.length;
		
		console.log('$scope. ' +JSON.stringify(data));		
		
    });
    $scope.setPage = function(pageNo) {
        $scope.currentPage = pageNo;
    };
    $scope.filter = function() {
        $timeout(function() { 
            $scope.filteredItems = $scope.filtered.length;
        }, 10);
    };
    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };
});
