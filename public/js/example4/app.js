(function() // es un buen hábito meter el código JS dentro de un closure
{
    // definimos el módulo principal de la aplicación y sus dependencias con otros módulos,
    // en este caso existirá una dependencia con el módulo 'product'

    var app = angular.module('store', ['product']);

    // se realiza una inyección de dependencias para disponer del servicio $http dentro del controlador

    app.controller('StoreController', ['$http', function($http) // función que será llamada mediante la directiva HTML ng-controller="StoreController"
    {
        var store = this; // se crea una variable que hace referencia al controlador para poder acceder a sus atributos dentro del método get que aparece a continuación

        store.userName = 'Aique';
        store.products = [];

        $http.get('/data/products.json').success(function(data)
        {
            store.products = data;
        });
    }]);

})();