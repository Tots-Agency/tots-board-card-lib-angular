import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TotsBoardCardModule } from 'projects/tots/board-card/src/public-api';
import { ExampleTrelloComponent } from './pages/example-trello/example-trello.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleTrelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TotsBoardCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
