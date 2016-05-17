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
            //Ensures the width of the select box is uniform
            const selectedOption = $('.selectedOption-getSize').first();
            const targetWidth = selectedOption.outerWidth();
            const optionsContainer = $('.optionContainer-resize').first();
            optionsContainer.outerWidth(targetWidth);
            
            //Remove initial classes so next select box also resizes correctly
            selectedOption.removeClass("selectedOption-getSize");
            optionsContainer.removeClass('optionContainer-resize');
        }
    };
}

export default selectBox;