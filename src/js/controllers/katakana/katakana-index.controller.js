angular
  .module('GoGenki')
  .controller('KatakanaIndexCtrl', KatakanaIndexCtrl);

KatakanaIndexCtrl.$inject = ['Test'];
function KatakanaIndexCtrl(Test) {
  const vm = this;

  // vm.katakanaTests = [];

  vm.tests = Test.query();
  console.log(vm.tests);
  // katakanaTests();
  //
  // function katakanaTests() {
  //   Test
  //   .query()
  //   .$promise
  //   .then((data) => {
  //     console.log(data);
  //   });
  // }
}
