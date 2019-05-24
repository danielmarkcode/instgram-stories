import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Story02Component } from './story02.component';

describe('Story02Component', () => {
  let component: Story02Component;
  let fixture: ComponentFixture<Story02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Story02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Story02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
