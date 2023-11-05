import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewWordPage } from './view-word.page';

describe('ViewWordPage', () => {
  let component: ViewWordPage;
  let fixture: ComponentFixture<ViewWordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewWordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
