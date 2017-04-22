app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = '#bajajra'; 
  $scope.promo = 'RAHUL BAJAJ';
  $scope.product = { 
  	name: 'The Book of Trees', 
  	price: 19, 
  	pubdate: new Date('2014', '03', '08')
	}
}]);
