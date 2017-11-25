export class ApiService {
  constructor($http) {
    this.$http = $http;
    this.baseUrl = '';
  }

  get(path, config) {
    return this.$http.get(this.baseUrl + path, config).then(r => r.data);
  }

  post(path, data, config) {
    return this.$http.post(this.baseUrl + path, data, config).then(r => r.data);
  }

  put(path, data, config) {
    return this.$http.put(this.baseUrl + path, data, config).then(r => r.data);
  }

  remove(path, config) {
    return this.$http.delete(this.baseUrl + path, config).then(r => r.data);
  }

  test() {
    return 'some data';
  }
}

ApiService.$inject = ['$http'];
