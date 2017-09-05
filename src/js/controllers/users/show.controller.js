angular
.module('GoGenki')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['Test', 'User', '$stateParams'];
function UsersShowCtrl(Test, User, $stateParams) {
  const vm = this;

  User
    .get({ id: $stateParams.id })
    .$promise
    .then(res => {
      vm.user = res;
      highScores();
    });

  vm.hiraganaScores = [];
  vm.katakanaScores = [];


  function highScores() {
    for (var i = 0; i < vm.user.scores.length; i++) {
      if (vm.user.scores[i].test_id === 11){
        vm.hiraganaScores.push(vm.user.scores[i].value);
      } else if (vm.user.scores[i].test_id === 23)
        vm.katakanaScores.push(vm.user.scores[i].value);
    }
  }
}
