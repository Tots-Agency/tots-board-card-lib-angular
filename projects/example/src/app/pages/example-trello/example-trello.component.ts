import { Component, OnInit } from '@angular/core';
import { TotsBoardCardConfig } from 'projects/tots/board-card/src/public-api';
import { HeaderSectionComponent } from '../../components/header-section/header-section.component';

@Component({
  selector: 'app-example-trello',
  templateUrl: './example-trello.component.html',
  styleUrls: ['./example-trello.component.scss']
})
export class ExampleTrelloComponent implements OnInit {

  config?: TotsBoardCardConfig;

  ngOnInit(): void {
    this.loadConfig();
  }

  loadConfig() {
    this.config = new TotsBoardCardConfig();
    this.config.componentHeader = HeaderSectionComponent;
    this.config.sections = [
      { item: { title: 'Section One' }, children: [
        { item: { title: 'Item One' } },
        { item: { title: 'Item Two' } },
        { item: { title: 'Item Three' } },
        { item: { title: 'Item Four' } },
      ] },

      { item: { title: 'Section Two' }, children: [
        { item: { title: 'Item Five' } },
        { item: { title: 'Item Six' } },
        { item: { title: 'Item Seven' } },
        { item: { title: 'Item Eight' } },
      ] },
    ];
  }
}
