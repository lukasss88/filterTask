(function () {
    'use strict';
    function round($filter, $sce)
    {
        return function(input, decimal) {
            var numberFilter = $filter('number');
            var filteredInput = numberFilter(input, decimal);
            var x = filteredInput.toString().split('.');
            return (x[0] + $sce.trustAsHtml('<sup>' + x[1] + '</sup>'))
        };
    }

    angular.module('app').filter('round', ['$filter', '$sce', round]);

})();
