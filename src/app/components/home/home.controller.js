export class HomeController {
  constructor(api) {
    this.message = 'Hello from HomeController()';
    console.log(api.test());
  }
}

HomeController.$inject = ['ApiService'];
