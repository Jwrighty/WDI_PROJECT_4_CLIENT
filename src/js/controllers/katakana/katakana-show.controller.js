angular
.module('GoGenki')
.controller('KatakanaShowCtrl', KatakanaShowCtrl);

KatakanaShowCtrl.$inject = ['Test', '$stateParams', 'Score', 'CurrentUserService', '$scope'];
function KatakanaShowCtrl(Test, $stateParams, Score, CurrentUserService, $scope) {
  const vm = this;

  vm.test = [];
  vm.checkAnswer = checkAnswer;
  vm.setQuestion = setQuestion;
  vm.points = 0;
  vm.tries = 0;
  vm.result = '';
  vm.index = 0;
  vm.correct = false;
  vm.wrong   = false;

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

        vm.result = `You got ${vm.points} correct`;
      });
    } else {
      vm.chosenCharacter = vm.test.characters[Math.floor(Math.random() * vm.test.characters.length)];
      vm.question = vm.chosenCharacter.symbol;

      $('.characterSymbolShow').each(() => {
        $('.characterSymbolShow').removeClass('selected');
      });

      $('.characterSymbolShow').each((i, elm) => {
        if (i !== vm.index) {
          $(elm).addClass('selected');

        }
      });
      vm.index++;
      if (vm.index === 6) {
        vm.index = 0;
      }
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
      rotate();
    } else {
      vm.answer = '';
      vm.result = 'Wrong';
      setQuestion();
      rotate();
    }
  }


  function checkAnswerPractice() {
    if (vm.answer === vm.chosenCharacter.romaji) {
      vm.points += 1;
      vm.tries +=1;
      vm.answer = '';
      vm.result = 'Correct!';
      setQuestion();
      rotate();
      vm.correct = true;
      setTimeout(function() {
        vm.correct = false;
        $scope.$apply();
      }, 1000);
    } else {
      vm.tries +=1;
      vm.answer = '';
      vm.result = 'Try again';
      vm.wrong = true;
      setTimeout(function() {
        vm.wrong = false;
        $scope.$apply();
      }, 500);
    }
  }

  function checkAnswer(){
    if (vm.test.name === 'All Katakana') {
      checkAnswerTest();
    } else {
      checkAnswerPractice();
    }
  }
  // ***** Carousel *****

  var carousel = $('.carousel'),currdeg  = 0;

  function rotate(){


    currdeg = currdeg - 60;

    carousel.css({
      '-webkit-transform': 'rotateY('+currdeg+'deg)',
      '-moz-transform': 'rotateY('+currdeg+'deg)',
      '-o-transform': 'rotateY('+currdeg+'deg)',
      'transform': 'rotateY('+currdeg+'deg)'
    });
  }

  // ****** Side Nav

  $('#toggle').click(function(){
    var w = $('#sidebar').width();
    var pos = $('#sidebar').offset().left;

    if(pos === 0){
      $('#sidebar').animate({'left': -w}, 'slow');
    } else {
      $('#sidebar').animate({'left': '0'}, 'slow');
    }

  });
}
