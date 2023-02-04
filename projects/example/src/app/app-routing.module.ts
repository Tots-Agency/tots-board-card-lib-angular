import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleTrelloComponent } from './pages/example-trello/example-trello.component';

const routes: Routes = [
  { path: '', component: ExampleTrelloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
