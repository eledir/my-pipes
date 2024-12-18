// https://angular.dev/tutorials/learn-angular/22-pipes
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, {
  // HttpClientModule is only used in deprecated HeroListComponent
  providers: [
    importProvidersFrom(HttpClientModule),
    provideProtractorTestingSupport(), // essential for e2e testing
  ]
});
