angular
.module('GoGenki')
.controller('WordsShowCtrl', WordsShowCtrl);

WordsShowCtrl.$inject = ['Test', '$stateParams', 'Score', 'CurrentUserService', '$scope'];
function WordsShowCtrl(Test, $stateParams, Score, CurrentUserService, $scope) {
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
    if (vm.test.words.length < 1) {
      vm.score = { user_id: CurrentUserService.currentUser.id, test_id: vm.test.id , value: vm.points };
      Score
      .save({ score: vm.score })
      .$promise
      .then(() => {
        vm.result = `You got ${vm.points} correct`;
      });
    } else {
      vm.chosenWord = vm.test.words[Math.floor(Math.random() * vm.test.words.length)];
      vm.question = vm.chosenWord.symbol;
      vm.meaning = vm.chosenWord.meaning;


      $('.characterSymbolShow').each(() => {
        $('.characterSymbolShow').removeClass('selectedWord');
      });

      $('.characterSymbolShow').each((i, elm) => {
        if (i !== vm.index) {
          $(elm).addClass('selectedWord');
        }
      });
      vm.index++;
      if (vm.index === 6) {
        vm.index = 0;
      }
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
      rotate();
    } else {
      vm.answer = '';
      vm.result = 'Wrong';
      setQuestion();
      rotate();
    }
  }

  function checkAnswerPractice() {
    if (vm.answer === vm.chosenWord.romaji) {
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
    if (vm.test.name === 'All Words') {
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
    var w = $('#sidebarWords').width();
    var pos = $('#sidebarWords').offset().left;

    if(pos === 0){
      $('#sidebarWords').animate({'left': -w}, 'slow');
    } else {
      $('#sidebarWords').animate({'left': '0'}, 'slow');
    }

  });
}
