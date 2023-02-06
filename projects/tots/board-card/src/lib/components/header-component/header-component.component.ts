import { Component, Input, ViewContainerRef } from '@angular/core';
import { TotsBoardCardConfig } from '../../entities/tots-board-card-config';
import { TotsSectionBoard } from '../../entities/tots-section-board';

@Component({
  selector: 'tots-board-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent {

  @Input() config!: TotsBoardCardConfig;
  @Input() section!: TotsSectionBoard;

  constructor(
    protected viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    const view = this.viewContainerRef.createComponent(this.config.componentHeader);
    (<any>view.instance).section = this.section;
  }
}
