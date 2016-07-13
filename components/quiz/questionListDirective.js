angular.module('quizApp').directive('questionList', [function () {
	return {
		restrict: 'E',
		scope: {
			questions: '=',
			answers: '=',
			results: '=',
			currentQuestion: '=',
			setCurrentQuestion: '&'
		},
		templateUrl: 'components/quiz/partials/quizListView.html',
		link: function (scope, iElement, iAttrs) {
			
		}
	};
}])