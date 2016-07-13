angular.module('quizApp').directive('fillBlank', [function () {
	return {
		restrict: 'AE',
		scope: {
			question: '=',
			save: '&',
			answers: '='
		},
		replace: true,
		templateUrl: 'components/quiz/partials/fillBlankTmpl.html',
		controller: function ($scope, $attrs) {
			$scope.$watch('question', function () {
				if ($scope.answers[$scope.question.id]) {
					$scope.answer = $scope.answers[$scope.question.id];
				}
				else {
					$scope.answer = '';
				}
			})
			
			$scope.update = function (choice) {
				if (choice) {
					$scope.selected = choice;
				};
			}

			$scope.saveAnswer = function (answer) {
				$scope.save({id: $scope.question.id, answer: answer})
			}

			$scope.handleEnter = function (ev, answer) {
				if (ev.keyCode === 13) {
					$scope.saveAnswer(answer);
				}
			}
		// link: function (scope, iElement, iAttrs) {
			
		// }
		}
	}
}])