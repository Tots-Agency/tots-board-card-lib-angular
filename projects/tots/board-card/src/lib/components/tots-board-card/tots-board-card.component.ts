import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TotsBoardCardConfig } from '../../entities/tots-board-card-config';
import { TotsSectionBoard } from '../../entities/tots-section-board';

@Component({
  selector: 'tots-board-card',
  templateUrl: './tots-board-card.component.html',
  styleUrls: ['./tots-board-card.component.scss']
})
export class TotsBoardCardComponent {

  @Input() config!: TotsBoardCardConfig;
  @Output() moveItem = new EventEmitter<{ item: any, previousIndex: number, currentIndex: number}>();
  @Output() changeSection = new EventEmitter<{ item: any, newSection: any, previousIndex: number, currentIndex: number}>();

  drop(event: CdkDragDrop<any[]>, section: TotsSectionBoard) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.moveItem.emit({ item: event.container.data[event.currentIndex], previousIndex: event.previousIndex, currentIndex: event.currentIndex });
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      this.changeSection.emit({ newSection: section, item: event.container.data[event.currentIndex], previousIndex: event.previousIndex, currentIndex: event.currentIndex });
    }
  }
}
