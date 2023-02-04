import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Angular material */
import { DragDropModule } from '@angular/cdk/drag-drop';


/** Components */
import { TotsBoardCardComponent } from './components/tots-board-card/tots-board-card.component';



@NgModule({
  declarations: [
    
    /** Components */
    TotsBoardCardComponent
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
