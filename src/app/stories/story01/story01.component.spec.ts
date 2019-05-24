import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Story01Component } from './story01.component';

describe('Story01Component', () => {
  let component: Story01Component;
  let fixture: ComponentFixture<Story01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Story01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Story01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
