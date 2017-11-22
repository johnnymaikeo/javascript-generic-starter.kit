import angular from 'angular';
import { DataFactory } from './data.factory';

export const AppSharedFactoriesModule = angular
  .module('app.shared.factories', [])
  .factory('DataFactory', DataFactory);
