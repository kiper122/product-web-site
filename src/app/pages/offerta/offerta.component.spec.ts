import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertaComponent } from './offerta.component';

describe('OffertaComponent', () => {
  let component: OffertaComponent;
  let fixture: ComponentFixture<OffertaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffertaComponent]
    });
    fixture = TestBed.createComponent(OffertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
