import angular from 'angular';
import AppComponent from './appComponent.js';
import SearchController from './components/search/searchController.js';
import selectBox from './components/selectBox/selectBox.js';

angular.module('myApp', [])
  .directive('mfDemoApp', AppComponent)
  .controller('searchController', SearchController)
  .directive('selectBox', selectBox)
  
angular.element(document).ready(function() {
  angular.bootstrap(document, ['myApp']);
});