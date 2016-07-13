angular.module('quizApp').directive('multChoice', [function () {
	return {
		restrict: 'AE',
		scope: {
			question: '=',
			save: '&',
			answers: '='
		},
		replace: true,
		templateUrl: 'components/quiz/partials/multipleChoiceTmpl.html',
		controller: function ($scope, $attrs) {
			$scope.$watch('question', function () {
				$scope.selected = '';
			})
			
			$scope.update = function (choice) {
				if (choice) {
					$scope.selected = choice;
				};
			}

			$scope.saveAnswer = function (selected) {
				$scope.save({id: $scope.question.id, answer: selected})
			}
		}
		// link: function (scope, iElement, iAttrs) {
			
		// }
	};
}])