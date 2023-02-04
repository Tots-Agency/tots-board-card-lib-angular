import { Component, OnInit } from '@angular/core';
import { TotsBoardCardConfig } from 'projects/tots/board-card/src/public-api';
import { CardItemComponent } from '../../components/card-item/card-item.component';
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
    this.config.componentItem = CardItemComponent;
    this.config.sections = [
      { item: { title: 'Section One' }, children: [
        { title: 'Item one' },
        { title: 'Item Two' },
        { title: 'Item Three' },
        { title: 'Item Four' },
      ] },

      { item: { title: 'Section Two' }, children: [
        { title: 'Item Five' },
        { title: 'Item Six' },
        { title: 'Item Seven' },
        { title: 'Item Eight' },
      ] },


      { item: { title: 'Section Two' }, children: [
        { title: 'Item Five' },
        { title: 'Item Six' },
        { title: 'Item Seven' },
        { title: 'Item Eight' },
      ] },


      { item: { title: 'Section Two' }, children: [
        { title: 'Item Five' },
        { title: 'Item Six' },
        { title: 'Item Seven' },
        { title: 'Item Eight' },
      ] },


      { item: { title: 'Section Two' }, children: [
        { title: 'Item Five' },
        { title: 'Item Six' },
        { title: 'Item Seven' },
        { title: 'Item Eight' },
      ] },


      { item: { title: 'Section Two' }, children: [
        { title: 'Item Five' },
        { title: 'Item Six' },
        { title: 'Item Seven' },
        { title: 'Item Eight' },
      ] },


      { item: { title: 'Section Two' }, children: [
        { title: 'Item Five' },
        { title: 'Item Six' },
        { title: 'Item Seven' },
        { title: 'Item Eight' },
      ] },


      { item: { title: 'Section Two' }, children: [
        { title: 'Item Five' },
        { title: 'Item Six' },
        { title: 'Item Seven' },
        { title: 'Item Eight' },
      ] },


      { item: { title: 'Section Two' }, children: [
        { title: 'Item Five' },
        { title: 'Item Six' },
        { title: 'Item Seven' },
        { title: 'Item Eight' },
      ] },

      { item: { title: 'Section Two' }, children: [
        { title: 'Item Five' },
        { title: 'Item Six' },
        { title: 'Item Seven' },
        { title: 'Item Eight' },
      ] },

      { item: { title: 'Section Two' }, children: [
        { title: 'Item Five' },
        { title: 'Item Six' },
        { title: 'Item Seven' },
        { title: 'Item Eight' },
      ] },

      { item: { title: 'Section Two' }, children: [
        { title: 'Item Five' },
        { title: 'Item Six' },
        { title: 'Item Seven' },
        { title: 'Item Eight' },
      ] },

      { item: { title: 'Section Two' }, children: [
        { title: 'Item Five' },
        { title: 'Item Six' },
        { title: 'Item Seven' },
        { title: 'Item Eight' },
      ] },
    ];
  }
}
