import controller from './selectBoxController.js';
import template from './selectBox.html!text';
import $ from 'jquery';
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
        link: function ($scope, element, attrs) {
            var targetWidth = document.querySelector('.selectedOption').offsetWidth;
            document.querySelector('.optionContainer').style.width = targetWidth + 'px';
        }
    };
}

export default selectBox;