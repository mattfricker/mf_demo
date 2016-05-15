import angular from 'angular';
import AppComponent from './appComponent.js';
import SearchController from './components/search/searchController.js';

angular.module('myApp', [])
  .directive('mfDemoApp', AppComponent)
  .controller('searchController', SearchController)

angular.element(document).ready(function() {
  angular.bootstrap(document, ['myApp']);
});