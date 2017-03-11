(function() {
    "use strict";

    angular.module('scrumboard.demo', []).controller('ScrumboardController', ['$scope', '$http', ScrumboardController]);

    function ScrumboardController($scope, $http) {

        $scope.add = function(list, title) {
            var card = {
								list:list.id,
                title: title
            };
            $http.post('/scrumboard/cards/', card).then(function(response) {
                list.cards.push(response.data);
            }, function() {
                alert('te la pelas');
            });
        };

				$scope.login = function(){
					$http.post('/auth_api/login/', {username: 'saul', password: 'saulsandoval'}).then(function() {
						window.location.reload()
					})
				};

        $scope.data = []
        $http.get('/scrumboard/lists/').then(function(response) {
            $scope.data = response.data;
        });

    } //controller
}());
