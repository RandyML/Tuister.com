tuister.controller('Demo', function($scope, $http,fileUpload)
{
	$scope.hola = "Hola desde index";
	$scope.nombre = "";
	$scope.nombres = ["Carlos", "Randy", "Chuy"];
	$scope.alumnos = [
		{
			"nombre": "Platanito",
			"matricula": 1301150013,
			"calificacion": 6
		},
		{
			"nombre": "Chuponcito",
			"matricula": 1301150085,
			"calificacion": 8
		},
		{
			"nombre": "Bananito",
			"matricula": 1903150013,
			"calificacion": 9
		}
	];

	$scope.obtenerPosts = function()
	{
		$http.get("http://tuister.com/posts").then(function(response)
			{
				console.log(response);
			});
	}

	$scope.mostrarNombre = function(a1)
	{
		$scope.alumno = 
		{
			nombre : a1.nombre,
			matricula : a1.matricula,
			calificacion : a1.calificacion
		}
	}
	$scope.post={};
    $scope.post.user_id = window.localStorage.getItem("user_id");


	$scope.obtenerPosts = function () {
        $http.get("http://tuister.com/posts").then(function (response) {
    
            $scope.posts = response.data[0];
            console.log($scope.posts);
        });
    }

	$scope.iniciarSesion = function()
	{
		$http.post("http://tuister.com/login", $scope.usuario).then(function(response)
		{
			$scope.respuesta = response.data;
			console.log(response);
			console.log($scope.respuesta);
			
			window.localStorage.setItem("token", $scope.respuesta.token);
			window.localStorage.setItem("userid", $scope.respuesta.id);
			window.location.href = "#/index.html";
		});
	}
	
    $scope.nuevoPost=function(){
        $http.post("http://tuister.com/post", $scope.post).then(function(response){
            $scope.post = response.data;
            console.log($scope.post)
            $scope.post.user_id=window.localStorage.getItem("user_id");
            // window.localStorage.getItem("token", $scope.post.token);
            // window.localStorage.getItem("user_id", $scope.respuesta.id);
        });
    }
tuister.controller('User',function(fileUpload)
{
	$scope.uploadFile=function()
	{
		var file=$scope.myFile;
		var uploadUrl="http://tuister.com/post";
		var data=
		{
			"title":"titulo de la imagen",
			"body":"body de la imagen",
			"user_ud":1
		}
		fileUpload.uploadFileToUrl(file,uploadUrl,data);

	};

});


});