(function () {
  'use strict';

  function MainController() {
    var ctrl = this;
    console.log('abc');
    ctrl.arrayValues = [14.783, 2.346, 89.2931, 16.501, 667.178];
  }

  angular.module('app').controller('MainController', [MainController]);
})();
