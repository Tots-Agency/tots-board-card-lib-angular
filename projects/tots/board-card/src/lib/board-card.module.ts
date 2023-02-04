import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Angular material */
import { DragDropModule } from '@angular/cdk/drag-drop';


/** Components */
import { TotsBoardCardComponent } from './components/tots-board-card/tots-board-card.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';



@NgModule({
  declarations: [
    
    /** Components */
    TotsBoardCardComponent,
         HeaderComponentComponent
  ],
  imports: [
    CommonModule,
    /** Angular Material */
    DragDropModule
  ],
  exports: [
    /** Components */
    TotsBoardCardComponent
  ]
})
export class TotsBoardCardModule { }
