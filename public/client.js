console.log('Hello to you!');

var myApp = angular.module('myApp', []);

myApp.controller('PetDirController', ['$scope', '$http', function($scope, $http) {
    console.log('Angular is up and running!');


    $scope.getPet = function() {
        console.log('seeking: ', $scope.nameIn);
        $http({
            method: 'GET',
            url: "/allpets"
        }).then(function(response) {
            console.log('I am back with: ', response);
            $scope.petDbResults = response.data;
        }); //end get call
    }; //end $scope.getPet

    $scope.addPet = function() {
        console.log('in postPet');
        var newPet = {
            name: $scope.nameIn,
            type: $scope.typeIn,
            age: $scope.ageIn,
            pic: $scope.picIn
        }; //end vnewPet
        console.log('adding...', newPet);
        $scope.nameIn = '';
        $scope.typeIn = '';
        $scope.ageIn = '';
        $scope.picIn = '';
        $http({
            method: "POST",
            url: "/allpets",
            data: newPet
        }).then();
        $scope.getPet();
    }; //end postPet

    $scope.getPet();

}]); //end controller
