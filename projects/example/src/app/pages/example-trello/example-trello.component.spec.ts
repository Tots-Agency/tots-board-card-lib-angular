import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTrelloComponent } from './example-trello.component';

describe('ExampleTrelloComponent', () => {
  let component: ExampleTrelloComponent;
  let fixture: ComponentFixture<ExampleTrelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleTrelloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleTrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
