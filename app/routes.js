/* se importa el modelo de la base de datos para poder hacer los movimientos y se exportan las rutas */
var Todo = require("./models/todo");
module.exports = function(app){

	/* declaracion de la ruta para obtener todos los documentos */
	app.get('/api/todos', function(req, res){
		Todo.find(function(err, todos){
			if (err) {
				res.send(err);
			} else{
				res.json(todos);
			}
		});
	});
	 

	/* declaracion de la ruta para crear un nuevo documento */
	app.post('/api/todos', function(req, res){
		Todo.create({
			text: req.body.text,
			done: false
		}, function(error, todo){
			if (error) {
				res.send(error);
			}
			Todo.find(function(error, todos){
				if(error){
					res.send(error);
				}
				res.json(todos);
			});
		});
	});


	/* declaracion de la ruta para eliminar un documento */
	app.delete('/api/todos/:todo', function(req, res){
		Todo.remove({
			_id: req.params.todo
		}, function(error, todo){
			if(error){
				res.send(error);
			}
			Todo.find(function(error, todos){
				if(error){
					res.send(error);
				}
				res.json(todos);
			});
		});
	});

	/* ruta index que muestra la pagina principal */
	app.get('/', function(req, res){
		res.sendFile('../public/index');
	});

}