const selectBoxController = ['$scope', function selectBoxController($scope) {
    $scope.showOptions = false;
    $scope.toggleOptions = () => $scope.showOptions = !$scope.showOptions;
}];

export default selectBoxController;