import { Component, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TotsBoardCardConfig } from '../../entities/tots-board-card-config';

@Component({
  selector: 'tots-board-card',
  templateUrl: './tots-board-card.component.html',
  styleUrls: ['./tots-board-card.component.scss']
})
export class TotsBoardCardComponent {

  @Input() config!: TotsBoardCardConfig;






  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
