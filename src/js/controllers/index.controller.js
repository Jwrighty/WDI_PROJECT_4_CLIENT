angular
  .module('GoGenki')
  .controller('IndexCtrl', IndexCtrl);

IndexCtrl.$inject = ['Test', 'CurrentUserService'];
function IndexCtrl(Test, CurrentUserService) {
  const vm = this;

  vm.user = CurrentUserService.currentUser;
}
