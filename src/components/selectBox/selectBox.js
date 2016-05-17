import controller from './selectBoxController.js';
import template from './selectBox.html!text';
import './selectBox.css!';

let selectBox = function () {
    return {
        restrict: 'E',      
        scope: {
            placeHolder: '@',
            options: '=',
            changeFunction: '=',
            selectedOption: '@'      
        },
        template,
        controller,
        // link: function ($scope, element, attrs) { }
    };
}

export default selectBox;