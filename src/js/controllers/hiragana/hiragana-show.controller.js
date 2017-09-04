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

  Test
  .get({ id: $stateParams.id})
  .$promise
  .then((data) => {
    vm.test = data;
    setQuestion();
  });

  function setQuestion() {
    if (vm.test.characters.length < 1) {
      vm.score = { user_id: CurrentUserService.currentUser.id, test_id: vm.test.id , value: vm.points };
      Score
      .save({ score: vm.score })
      .$promise
      .then(() => {
        console.log('End of test, you scored', vm.points );
        vm.result = `Well done you got ${vm.points} correct`;
      });
    } else {
      vm.chosenCharacter = vm.test.characters[Math.floor(Math.random() * vm.test.characters.length)];
      vm.question = vm.chosenCharacter.symbol;
    }
  }

  function checkAnswerTest() {
    const index = vm.test.characters.indexOf(vm.chosenCharacter);
    vm.test.characters.splice(index, 1);
    if (vm.answer === vm.chosenCharacter.romaji) {
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
