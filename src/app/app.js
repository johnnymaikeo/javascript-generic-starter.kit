import angular from 'angular';
import uirouter from 'angular-ui-router';
import { config } from './app.config';
import { run } from './app.run';
import { AppSharedFactoriesModule } from './shared/factories/factories.module';
import { AppComponentsHomeModule } from './components/home/home.module';
import { AppComponentsAboutModule } from './components/about/about.module';

export const AppModule = angular
  .module('app', [uirouter, AppSharedFactoriesModule, AppComponentsHomeModule, AppComponentsAboutModule])
  .config(config)
  .run(run);
