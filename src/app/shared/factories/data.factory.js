/* @ngInject */
export class DataFactory {
  constructor($http) {
    this.$http = $http;
  }

  get(path, config) {
    return this.$http.get(this.baseUrl + path, config).then(r => r.data);
  }

  post(path, data, config) {
    return this.$http.post(this.baseUrl + path, data, config)
  }

  test() {
    return 'some data';
  }
}
