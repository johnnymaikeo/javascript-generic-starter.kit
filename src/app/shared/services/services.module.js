import angular from 'angular';
import { ApiService } from './api.service';

// TODO: create layers of modules to reduce number of imports

export const AppSharedServices = angular
  .module('app.shared.services', [])
  .service('ApiService', ApiService);
