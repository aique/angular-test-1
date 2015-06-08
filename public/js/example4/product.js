(function() // es un buen hábito meter el código JS dentro de un closure
{
    var product = angular.module('product', []); // definimos el módulo del producto

    product.controller('ReviewFormController', function()
    {
        // definición de un atributo en el controlador

        this.review =
        {
            stars: 1,
            body: '',
            author: ''
        };

        // definición de una función en el controlador

        this.addReview = function (product)
        {
            product.reviews.push(this.review);

            this.review =
            {
                stars: 1,
                body: '',
                author: ''
            }; // al inicializar el comentario se limpian los campos del formulario tras el envío
        }
    });

    product.directive('productTitle', function()
    {
        return {
            restrict: 'E',
            templateUrl: '/html/example4/templates/product-title.html'
        };
    });

    product.directive('productPanels', function()
    {
        return {
            restrict: 'E',
            templateUrl: '/html/example4/templates/product-panels.html',
            controller: function() // metemos el controlador dentro de la directiva
            {
                this.tab = 1;

                this.selectTab = function(setTab)
                {
                    this.tab = setTab;
                };

                this.isSelected = function(checkTab)
                {
                    return this.tab === checkTab;
                }
            },
            controllerAs: 'panel' // asignamos un alias al controlador
        };
    });

    product.directive('productGallery', function()
    {
        return {
            restrict: 'E',
            templateUrl: '/html/example4/templates/product-gallery.html'
        }
    });
})();