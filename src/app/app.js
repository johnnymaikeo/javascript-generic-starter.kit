import angular from 'angular';
import uirouter from 'angular-ui-router';
import { config } from './app.config';
import { run } from './app.run';
import { AppSharedServices } from './shared/services/services.module';
import { AppComponentsHomeModule } from './components/home/home.module';
import { AppComponentsAboutModule } from './components/about/about.module';


export const AppModule = angular
  .module('app', [uirouter, AppComponentsHomeModule.name, AppComponentsAboutModule.name, AppSharedServices.name])
  .config(config)
  .run(run);
