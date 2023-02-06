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

  moveItem(data: { item: any, previousIndex: number, currentIndex: number}) {
    console.log('moveItem', data);
  }

  changeSection(data: { item: any, newSection: any, previousIndex: number, currentIndex: number}) {
    console.log(data);
  }

  loadConfig() {
    this.config = new TotsBoardCardConfig();
    this.config.componentHeader = HeaderSectionComponent;
    this.config.componentItem = CardItemComponent;
    //this.config.disabled = true;
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


      { item: { title: 'Section Three' }, children: [
        { title: 'Item Nine' },
        { title: 'Item 10' },
        { title: 'Item 11' },
        { title: 'Item 12' },
      ] },


      { item: { title: 'Section Four' }, children: [
        { title: 'Item 13' },
        { title: 'Item 14' },
        { title: 'Item 15' },
        { title: 'Item 16' },
      ] },


      { item: { title: 'Section Five' }, children: [
        { title: 'Item 17' },
        { title: 'Item 18' },
        { title: 'Item 19' },
        { title: 'Item 20' },
      ] },


      { item: { title: 'Section Six' }, children: [
        { title: 'Item 21' },
        { title: 'Item 22' },
        { title: 'Item 23' },
        { title: 'Item 24' },
      ] },


      { item: { title: 'Section Seven' }, children: [
        { title: 'Item 25' },
        { title: 'Item 26' },
        { title: 'Item 27' },
        { title: 'Item 28' },
      ] },


      { item: { title: 'Section Eight' }, children: [
        { title: 'Item 29' },
        { title: 'Item 30' },
        { title: 'Item 31' },
        { title: 'Item 32' },
      ] },


      { item: { title: 'Section Nine' }, children: [
        { title: 'Item 33' },
        { title: 'Item 34' },
        { title: 'Item 35' },
        { title: 'Item 36' },
      ] },

      { item: { title: 'Section Ten' }, children: [
        { title: 'Item 37' },
        { title: 'Item 38' },
        { title: 'Item 39' },
        { title: 'Item 40' },
      ] },

      { item: { title: 'Section Eleven' }, children: [
        { title: 'Item 41' },
        { title: 'Item 42' },
        { title: 'Item 43' },
        { title: 'Item 44' },
      ] },

      { item: { title: 'Section Twelve' }, children: [
        { title: 'Item 45' },
        { title: 'Item 46' },
        { title: 'Item 47' },
        { title: 'Item 48' },
      ] },

      { item: { title: 'Section Thirteen' }, children: [
        { title: 'Item 49' },
        { title: 'Item 50' },
        { title: 'Item 51' },
        { title: 'Item 52' },
      ] },
    ];
  }
}
