angular
.module('GoGenki')
.controller('KatakanaShowCtrl', KatakanaShowCtrl);

KatakanaShowCtrl.$inject = ['Test', '$stateParams'];
function KatakanaShowCtrl(Test, $stateParams) {
  const vm = this;

  vm.test = [];
  vm.checkAnswer = checkAnswer;
  vm.setQuestion = setQuestion;
  vm.score = 0;
  vm.tries = 0;
  vm.result = '';

  setQuestion();

  function setQuestion() {
    Test
    .get({ id: $stateParams.id})
    .$promise
    .then((data) => {
      vm.test = data;
      console.log(vm.test);
      vm.chosenCharacter = vm.test.characters[Math.floor(Math.random() * vm.test.characters.length)];
      vm.question = vm.chosenCharacter.symbol;
    });
  }

  function checkAnswer(){
    if (vm.answer === vm.chosenCharacter.romaji) {
      vm.score += 1;
      vm.tries +=1;
      setQuestion();
      vm.answer = '';
      vm.result = 'Correct!';
      // push score and tries to User score array
    } else {
      vm.tries +=1;
      vm.answer = '';
      vm.result = 'Try again';
      // push score and tries to User score array
    }


  }

}
