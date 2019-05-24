import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Story04Component } from './story04.component';

describe('Story04Component', () => {
  let component: Story04Component;
  let fixture: ComponentFixture<Story04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Story04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Story04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
