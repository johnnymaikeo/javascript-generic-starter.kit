import angular from 'angular';
import { AboutController } from './about.controller';

export const AppComponentsAboutModule = angular
  .module('app.about', [])
  .controller('AboutController', AboutController);
