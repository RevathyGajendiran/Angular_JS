
var app = angular.module('groceryListApp', []);

app.controller("HomeController", ["$scope", function($scope) {
    $scope.appTitle = "Grocery List";
}]);

app.controller("GroceryListItemsController", ["$scope", function($scope){
    $scope.groceryItems = [
        {itemName: 'milk', date: '2018-10-01'},
        {itemName: 'cookies', date: '2018-10-01'},
        {itemName: 'ice cream', date: '2018-10-02'},
        {itemName: 'potatoes', date: '2018-10-02'},
        {itemName: 'cereal', date: '2018-10-03'},
        {itemName: 'bread', date: '2018-10-03'},
        {itemName: 'eggs', date: '2018-10-04'},
        {itemName: 'tortillas', date: '2018-10-04'}
    ]

}])
