angular
.module('GoGenki')
.config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('homepage', {
    url: '/',
    templateUrl: '/js/views/homepage.html'
  })
  .state('index', {
    url: '/index',
    templateUrl: '/js/views/user-home.html',
    controller: 'IndexCtrl',
    controllerAs: 'vm'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/authentications/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/authentications/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('hiraganaIndex', {
    url: '/hiragana',
    templateUrl: '/js/views/hiragana/hiragana-index.html',
    controller: 'HiraganaIndexCtrl',
    controllerAs: 'vm'
  })
  .state('hiraganaShow', {
    url: '/hiragana/:id',
    templateUrl: '/js/views/hiragana/hiragana-show.html',
    controller: 'HiraganaShowCtrl',
    controllerAs: 'vm'
  })
  .state('katakanaIndex', {
    url: '/katakana',
    templateUrl: '/js/views/katakana/katakana-index.html',
    controller: 'KatakanaIndexCtrl',
    controllerAs: 'vm'
  })
  .state('katakanaShow', {
    url: '/katakana/:id',
    templateUrl: '/js/views/katakana/katakana-show.html',
    controller: 'KatakanaShowCtrl',
    controllerAs: 'vm'
  })
  .state('wordsIndex', {
    url: '/words',
    templateUrl: '/js/views/words/words-index.html',
    controller: 'WordsIndexCtrl',
    controllerAs: 'vm'
  })
  .state('wordsShow', {
    url: '/words/:id',
    templateUrl: '/js/views/words/words-show.html',
    controller: 'WordsShowCtrl',
    controllerAs: 'vm'
  });

  $urlRouterProvider.otherwise('/');
}
