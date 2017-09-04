angular
.module('GoGenki')
.controller('HiraganaShowCtrl', HiraganaShowCtrl);

HiraganaShowCtrl.$inject = ['Test', '$stateParams', 'Score', 'CurrentUserService'];
function HiraganaShowCtrl(Test, $stateParams, Score, CurrentUserService) {
  const vm = this;

  vm.test = [];
  vm.checkAnswer = checkAnswer;
  vm.setQuestion = setQuestion;
  vm.points = 0;
  vm.tries = 0;
  vm.result = '';
  vm.score = { user_id: CurrentUserService.currentUser, test_id: vm.test.id , value: vm.points };

  Test
  .get({ id: $stateParams.id})
  .$promise
  .then((data) => {
    vm.test = data;
    setQuestion();
  });

  function setQuestion() {
    vm.chosenCharacter = vm.test.characters[Math.floor(Math.random() * vm.test.characters.length)];
    vm.question = vm.chosenCharacter.symbol;
  }

  function checkAnswerTest() {
    if (vm.test.characters.length === 0) {
      Score
      .save({ score: vm.score })
      .$promise
      .then(() => {
        console.log('You scored ', vm.score);
      });
    } else {
      const index = vm.test.characters.indexOf(vm.chosenCharacter);
      vm.test.characters.splice(index, 1);
    }
    if (vm.answer === vm.chosenCharacter.romaji) {
      vm.points += 1;
      vm.answer = '';
      vm.result = 'Correct';
      setQuestion();
    } else {
      vm.answer = '';
      vm.result = 'Wrong';
      setQuestion();
    }
    // if vm.test.characters.length === 0 run .save and pass object
  }

  function checkAnswerPractice() {
    if (vm.answer === vm.chosenCharacter.romaji) {
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
    if (vm.test.name === 'All Hiragana') {
      checkAnswerTest();
    } else {
      checkAnswerPractice();
    }
  }
}
