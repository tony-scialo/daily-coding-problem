import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChallengeOneComponent } from './challenge-one/challenge-one.component';
import { ExampleComponent } from './challenge-one/example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    ChallengeOneComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
