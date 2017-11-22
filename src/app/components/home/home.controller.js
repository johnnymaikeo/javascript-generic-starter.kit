export class HomeController {
  constructor(DataFactory) {
    this.message = 'Hello from HomeController()';
    console.log(DataFactory.test());
  }
}

HomeController.$inject = ['DataFactory'];
