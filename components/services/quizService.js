angular.module('quizApp').service('quizService', ['$q', function($q){
    var quizSampleObj = {
        'html': {
            id: 1,
            name: 'HTML',
            questions: [{
                id: 1,
                title: 'Box-model order from outside in is: Content, Border, Margin, Padding (T/F)',
                qtype: 'multiple',
                choices: ['T', 'F'],
                correct: 1
            },
            {
                id: 2,
                title: 'Which is not a semantic html element?',
                qtype: 'multiple',
                choices: ['header', 'div', 'footer', 'article'],
                correct: 1
            }]
        },
        'angular': {
            id: 2,
            name: 'Angular',
            questions: [{
                id: 1,
                title: 'DOM manipulation should be performed in an angular directive? (T/F)',
                qtype: 'multiple',
                choices: ['T', 'F'],
                correct: 0
            },
            {
                id: 2,
                title: 'Which is not a valid option for a directive?',
                qtype: 'multiple',
                choices: ['transclude', 'link', 'scope', 'raccoon'],
                correct: 3
            },
            {
                id: 3,
                title: 'ng-click is a built-in angular _____.',
                qtype: 'blank',
                correct: 'directive'
            },
            {
                id: 4,
                title: 'DOM manipulation should be performed in an angular directive? (T/F)',
                qtype: 'multiple',
                choices: ['T', 'F'],
                correct: 0
            },
            {
                id: 5,
                title: 'Which is not a valid option for a directive?',
                qtype: 'multiple',
                choices: ['transclude', 'link', 'scope', 'The frenzied scratching of a rabid badger'],
                correct: 3
            }]
        }
    };


    this.getQuizNames = function () {
         var defer = $q.defer();
         defer.resolve([{
            name: "Angular"
         } , {
            name: "HTML"
         }]);
         return defer.promise;
    }

    this.getQuestions = function (name) {
         var defer = $q.defer();
         // console.log('name from service: ' + name);
         // console.log(quizSampleObj[name]);
         defer.resolve(quizSampleObj[name.toLowerCase()].questions);
         return defer.promise; 
    }

    this.checkMyAnswers = function (questions, answers) {
         var defer = $q.defer();
         var results = {
            done: true
         };

         for (var i = 0; i < questions.length; i++) {
             var isCorrect = questions[i].qtype === 'multiple' ? questions[i].choices[questions[i].correct] === answers[questions[i].id] : (questions[i].qtype === 'blank' ? questions[i].correct === answers[questions[i].id] : false)
             results[questions[i].id] = isCorrect;
         };

         defer.resolve(results);
         return defer.promise;
    }
    



    
      

}])