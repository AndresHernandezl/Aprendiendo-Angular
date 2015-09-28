//Comenzamos un aplicacion angular
//Donde creamos un modelo del App ng-app

var app = angular.module('MiPrimeraApp',[]);
//Definimos un controller ng-controller donde scope solo funciona en
//donde se definio en el html

app.controller('PrimerController', function($scope) {
    $scope.nombre = 'Andres Hernandez';
});
//Definimos un Nuevo controller donde lo utlizaremos para
//Duplicar Objetos con ng-repeat
app.controller('CtlrComentarios', function($scope) {
    //Definimos Un objeto nuev
    $scope.NewComentarios = {};
    //Arreglo de Objetos comentarios
    $scope.comentarios = [
        {username: "Pedro", comment: "Aprendiendo Angular"},
        {username: "Tron", comment: "Aprendiendo Angular con Andres"},
        {username: "Michael", comment: "Aprendiendo en codeandola"}
    ];
    //Aqui Hacemos un metodo Para agregar un nuevo comentario
    $scope.agregarComentario = function(){
        $scope.comentarios.push($scope.NewComentarios);
        $scope.NewComentarios = {};
    };
});
