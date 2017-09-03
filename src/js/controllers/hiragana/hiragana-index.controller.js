angular
  .module('GoGenki')
  .controller('HiraganaIndexCtrl', HiraganaIndexCtrl);

HiraganaIndexCtrl.$inject = ['Test'];
function HiraganaIndexCtrl(Test) {
  const vm = this;

  vm.tests = Test.query();
  console.log(vm.tests);
}
