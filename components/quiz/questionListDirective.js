angular.module('quizApp').directive('questionList', [function () {
	return {
		restrict: 'E',
		scope: {
			// obj: '=',  //this was never referred to, but found it in solution
			questions: '=',
			answers: '=',
			results: '=',
			currentQuestion: '=',
			setCurrentQuestion: '&'
		},
		
		templateUrl: 'components/quiz/partials/quizListView.html',
		// I added this controller trying to make it work. it's not in 
		// the instructions, but something similar is in the "solution"
		// console logging question is the desired result. but the
		// questionDetailView.html (that contains the MC and fill 
			// in the blank directives doesn't see it)
		controller: function ($scope, quizService, $stateParams) {
			$scope.setCurrentQuestion = function (question) {
				$scope.currentQuestion = question;
		// console.log(question);
			}
		},
		link: function (scope, iElement, iAttrs) {
			
		}
	};
}])