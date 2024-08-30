import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcpgameComponent } from './rcpgame.component';

describe('RcpgameComponent', () => {
  let component: RcpgameComponent;
  let fixture: ComponentFixture<RcpgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RcpgameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RcpgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
