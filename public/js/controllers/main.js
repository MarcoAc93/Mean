/* nuevo modulo llamado todoController que contiene el controlador principal */
angular.module('todoController', [])
.controller('mainController', function($scope, $http){
	
	$scope.formData = {};
	/* hace una peticion get a la url del api */
	$http.get("/api/todos")
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
	/* metodo para eliminar una tarea por medio de la url del api pasandole el id a eliminar */
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

});