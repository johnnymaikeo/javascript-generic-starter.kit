import angular from 'angular';
import { ApiService } from './api.service';

export const AppSharedServices = angular
  .module('app.shared.services', [])
  .service('ApiService', ApiService);
