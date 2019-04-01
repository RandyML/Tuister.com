tuister.controller('registro', function($scope, $http)
{
	$scope.usuario = 
	{
		name: "",
		email: "",
		nickname: "",
		password: ""
	}
	$scope.crearUsuario = function()
	{
		if( ($scope.usuario.password == $scope.comprobar.password) )
		{
			
			$http.post("http://tuister.com/user", $scope.usuario).then(function(response)
			{
				$scope.respuesta = response.data;
				console.log(response);
				console.log($scope.respuesta);
			});
		}
		else
		{
			alert("Las contraseñas deben coincidir");
			document.getElementById("p1").value="";
			document.getElementById("p2").value="";
		}
	}
});