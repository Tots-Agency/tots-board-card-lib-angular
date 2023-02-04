import { Component, Input, ViewContainerRef } from '@angular/core';
import { TotsBoardCardConfig } from '../../entities/tots-board-card-config';

@Component({
  selector: 'tots-board-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent {

  @Input() config!: TotsBoardCardConfig;
  @Input() item!: any;

  constructor(
    protected viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    const view = this.viewContainerRef.createComponent(this.config.componentItem);
    (<any>view.instance).item = this.item;
  }
}
