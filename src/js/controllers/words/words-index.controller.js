angular
  .module('GoGenki')
  .controller('WordsIndexCtrl', WordsIndexCtrl);

WordsIndexCtrl.$inject = ['Test'];
function WordsIndexCtrl(Test) {
  const vm = this;

  vm.tests = Test.query();
}
