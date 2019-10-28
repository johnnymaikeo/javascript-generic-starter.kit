export class HomeController {
  constructor(api) {
    this.message = 'Hello from HomeController()';
    this.api = api;
  }
}

HomeController.$inject = ['ApiService'];
