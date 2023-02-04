import { Component, Input } from '@angular/core';
import { TotsSectionBoard } from 'projects/tots/board-card/src/public-api';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent {

  @Input() section!: TotsSectionBoard;

}
