import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Story03Component } from './story03.component';

describe('Story03Component', () => {
  let component: Story03Component;
  let fixture: ComponentFixture<Story03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Story03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Story03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
