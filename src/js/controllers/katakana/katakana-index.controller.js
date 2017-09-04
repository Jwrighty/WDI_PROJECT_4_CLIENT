angular
  .module('GoGenki')
  .controller('KatakanaIndexCtrl', KatakanaIndexCtrl);

KatakanaIndexCtrl.$inject = ['Test'];
function KatakanaIndexCtrl(Test) {
  const vm = this;

  vm.tests = Test.query();
}
