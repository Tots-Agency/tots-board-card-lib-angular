import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotsBoardCardComponent } from './tots-board-card.component';

describe('TotsBoardCardComponent', () => {
  let component: TotsBoardCardComponent;
  let fixture: ComponentFixture<TotsBoardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotsBoardCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotsBoardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
