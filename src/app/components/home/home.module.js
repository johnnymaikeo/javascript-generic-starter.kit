import angular from 'angular';
import { HomeController } from './home.controller';

export const AppComponentsHomeModule = angular
  .module('app.home', [])
  .controller('HomeController', HomeController);
