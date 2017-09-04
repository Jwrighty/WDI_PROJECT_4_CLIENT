angular
.module('GoGenki')
.controller('WordsShowCtrl', WordsShowCtrl);

WordsShowCtrl.$inject = ['Test', '$stateParams', 'Score', 'CurrentUserService'];
function WordsShowCtrl(Test, $stateParams, Score, CurrentUserService) {
  const vm = this;

  vm.test = [];
  vm.checkAnswer = checkAnswer;
  vm.setQuestion = setQuestion;
  vm.points = 0;
  vm.tries = 0;
  vm.result = '';

  Test
  .get({ id: $stateParams.id})
  .$promise
  .then((data) => {
    vm.test = data;
    console.log(vm.test);
    setQuestion();
  });

  function setQuestion() {
    if (vm.test.words.length < 1) {
      vm.score = { user_id: CurrentUserService.currentUser.id, test_id: vm.test.id , value: vm.points };
      Score
      .save({ score: vm.score })
      .$promise
      .then(() => {
        console.log('End of test, you scored', vm.points );
        vm.result = `Well done you got ${vm.points} correct`;
      });
    } else {
      vm.chosenWord = vm.test.words[Math.floor(Math.random() * vm.test.words.length)];
      vm.question = vm.chosenWord.symbol;
    }
  }

  function checkAnswerTest() {
    const index = vm.test.words.indexOf(vm.chosenWord);
    vm.test.words.splice(index, 1);
    if (vm.answer === vm.chosenWord.romaji) {
      vm.points += 1;
      vm.tries +=1;
      vm.answer = '';
      vm.result = 'Correct';
      setQuestion();
    } else {
      vm.answer = '';
      vm.result = 'Wrong';
      setQuestion();
    }
  }

  function checkAnswerPractice() {
    if (vm.answer === vm.chosenWord.romaji) {
      vm.points += 1;
      vm.tries +=1;
      vm.answer = '';
      vm.result = 'Correct!';
      setQuestion();
    } else {
      vm.tries +=1;
      vm.answer = '';
      vm.result = 'Try again';
    }
  }

  function checkAnswer(){
    if (vm.test.name === 'All Words') {
      checkAnswerTest();
    } else {
      checkAnswerPractice();
    }
  }
}
