config.$inject = ['$stateProvider', '$urlRouterProvider'];

export function config($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/404");

  var homeState = {
    name: 'home',
    url: '',
    template: require('./components/home/home.view.html'),
    controller: 'HomeController',
    controllerAs: 'vm'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: require('./components/about/about.view.html'),
    controller: 'AboutController',
    controllerAs: 'vm'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(aboutState);
}
