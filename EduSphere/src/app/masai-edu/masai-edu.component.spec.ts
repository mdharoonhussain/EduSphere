import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasaiEduComponent } from './masai-edu.component';

describe('MasaiEduComponent', () => {
  let component: MasaiEduComponent;
  let fixture: ComponentFixture<MasaiEduComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasaiEduComponent]
    });
    fixture = TestBed.createComponent(MasaiEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
