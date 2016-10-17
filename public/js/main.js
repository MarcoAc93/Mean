angular.module('angularTodo', []);

function mainController($scope, $http){
	$scope.formData = {};

	/* hace una peticion get a la url del api */
	$http.get('/api/todos')
	.success(function(data){
		$scope.todos = data;
		console.log(data);
	})

	.error(function(data){
		console.log('Error: '+ data);
	});

	/* metodo para crear una nueva tarea por medio de la url del api */
	$scope.createTodo = function(){
		$http.post('/api/todos', $scope.formData)
		.success(function(data){
			$scope.formData = {};
			$scope.todos = data;
			console.log(data);
		})

		.error(function(data){
			console.log('Error: ' + data);
		});
	};

	$scope.deleteTodo = function(id){
		$http.delete('/api/todos/' + id)
		.success(function(data){
			$scope.todos = data;
			console.log(data);
		})

		.error(function(data){
			console.log('Error: ' + data);
		});
	};

};