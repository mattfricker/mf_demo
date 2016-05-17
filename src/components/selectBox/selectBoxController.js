const selectBoxController = ['$scope', function selectBoxController($scope) {
    //Determine when select box options show
    $scope.showOptions = false;
    $scope.toggleOptions = () => $scope.showOptions = !$scope.showOptions;
}];

export default selectBoxController;