import template from './appComponent.html!text';;
import './app.css!';

let appComponent = function() {
	return {
		template,
		restrict: 'E'
	};
};

export default appComponent;