angular.module('quizApp').controller('homeCtrl', ['$scope', 'quizList', function ($scope, quizList) {

	// console.log(pastQuizList);
	$scope.quizzes = quizList;
	
}])