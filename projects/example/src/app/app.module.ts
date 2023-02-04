import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TotsBoardCardModule } from 'projects/tots/board-card/src/public-api';
import { ExampleTrelloComponent } from './pages/example-trello/example-trello.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { CardItemComponent } from './components/card-item/card-item.component';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ExampleTrelloComponent,
    HeaderSectionComponent,
    CardItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TotsBoardCardModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
